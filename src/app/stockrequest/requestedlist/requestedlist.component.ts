import { Component, OnInit } from '@angular/core';
import { ServerService } from '../../server.service';
import { ToastrService } from 'ngx-toastr';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { NgxSpinnerService } from "ngx-spinner";
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-requestedlist',
  templateUrl: './requestedlist.component.html',
  styleUrls: ['./requestedlist.component.css']
})
export class RequestedlistComponent implements OnInit {
  lstPermission=JSON.parse(localStorage.group_permissions)
  previusUrl = localStorage.getItem('previousUrl'); 
  lstCustom=[]
  constructor(private serviceObject: ServerService,
    public toastr: ToastrService,
    private spinnerService: NgxSpinnerService,

    public router: Router,
   ) { }
  source: LocalDataSource;
  source2: LocalDataSource;
  selectedFrom
  selectedTo
  data = [];
  datTo;
  datFrom;
  searchBranch: FormControl = new FormControl();
  selectedBranch;
  lstBranch = []
  IntBranchId;
  strBranch;
  currentBranch='';
// settings defines the data structure of smart table
 settings = {
  hideSubHeader: true,
    columns: {
      vchr_stkrqst_num: {
        title: 'Stock Order No.',
        filter: false
      },
      dat_request: {
        title: 'Order Date',
        filter: false
      },
      fk_to__vchr_name: {
        title: 'Branch',
        filter: false
      },
      dat_expected: {
        title: 'Expected Date & time',
        filter: false
      },
      status: {
        title: 'Status',
        filter: false
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
      custom: this.lstCustom,
      position: 'right'
      },
  };

  ngOnInit() {
    this.searchBranch.valueChanges
      .pipe(debounceTime(400))
      .subscribe((strData: string) => {
        if (strData === undefined || strData === null) {
          this.lstBranch = [];
        } else {
          if (strData.length >= 1) {
            this.serviceObject
              .postData('branch/branch_typeahead/', { term: strData })
              .subscribe(
                (response) => {
                  this.lstBranch = response['data'];
                 
                  

                }
              );
          }
        }
      }
      );
    this.getList(this.datFrom, this.datTo, 0,);
    // this.listData();
    let dct_perms= {'ADD':false,'VIEW':false,'EDIT':false,'DELETE':false}

    this.lstPermission.forEach(item=> {
      if (item["NAME"] == "List Requested") {
        dct_perms.ADD = item["ADD"];
        dct_perms.EDIT= item["EDIT"];
        dct_perms.DELETE = item["DELETE"];
        dct_perms.VIEW = item["VIEW"]
      }
    });
    
    if(dct_perms.VIEW==true  ){
      this.lstCustom= [{ name: 'ourCustomAction', title: '<i class="ti-eye text-info m-r-10"></i>' }]

    }
    this.settings.actions.custom = this.lstCustom
  }
  BranchChanged(item) {
    this.currentBranch = item.name;
    this.IntBranchId = item.id;
    this.strBranch = item.name;
    this.selectedBranch = item.name;
  }
  listData()
  {
    let status =0
    let dctData={};
    let tempData
    this.selectedFrom = moment(this.datFrom).format('YYYY-MM-DD')
    this.selectedTo = moment(this.datTo).format('YYYY-MM-DD')

     if (this.selectedFrom > this.selectedTo || (!this.selectedFrom) || (!this.selectedTo) )  {
      this.toastr.error('Please select correct date period', 'Error!');
        return false
      }
    
    this.getList( 
      new Date(this.datFrom).toLocaleString('en-GB'),
      new Date(this.datTo).toLocaleString('en-GB'),
      1,
    );
  }
  branchNgModelChanged(event){
    if(this.currentBranch!=this.selectedBranch){
      this.strBranch = '';
      this.IntBranchId = null;
    }
  }

getList (startDate, endDate, status) {
  let d1 = this.datFrom;
    let d2 = this.datTo;
    let tempData;
    let data;
    if (status === 0) {
      const urls = ['stockrequest/requestedlist']

    //  if (this.previusUrl != '/crm/viewlead'  ) {
      if (!(urls.find( x => x === this.previusUrl))) {
        console.log("inside",this.previusUrl);

          localStorage.removeItem('stockRequestedStatus')
          localStorage.removeItem('stockRequestedData')
     }
     if (localStorage.getItem('stockRequestedStatus')) {
       
        tempData = JSON.parse(localStorage.getItem('stockRequestedData'))
        // console.log(tempData,"tempData");
        

        d1 = tempData['start_date']
        d2 = tempData['end_date']
        this.IntBranchId = tempData['branchId']
        this.strBranch= tempData['branchname']
        this.selectedBranch= tempData['branchname']
        this.currentBranch=tempData['branchname']
        status = 1
        localStorage.removeItem('stockRequestedStatus')
        // localStorage.removeItem('enquiryCustomerId')
        // localStorage.removeItem('enquiryCustomerNumber')
      }
    }
     else if (status === 1) {
      
      
      
      d1 = new Date(d1).toDateString();
      d2 = new Date(d2).toDateString();
      data = {start_date: d1, end_date: d2,branchId:this.IntBranchId,branchname:this.strBranch }

      localStorage.setItem('stockRequestedData', JSON.stringify(data))

    }
    d1 =  moment(d1).format('YYYY-MM-DD');
    d2 =  moment(d2).format('YYYY-MM-DD');
    this.datFrom=d1
    this.datTo=d2
    let dctData={}
    dctData['datFrom'] =d1
    dctData['datTo']=d2
    dctData['intBranchId']=this.IntBranchId
    dctData['type']='from'
    this.spinnerService.show();

  this.serviceObject.postData('internalstock/getrequestlist/',dctData).subscribe(res => {
    // res['request_list'].forEach((element, index) => {
    //   // element['slno'] = index + 1;
    // });
    this.spinnerService.hide();

    if (res.status === 1) {
      this.data =  res['request_list'];
      this.data.forEach(element => {
        element['dat_request'] = moment(element['dat_request']).format('DD-MM-YYYY');
        element['dat_expected'] = moment(element['dat_expected']).format('DD-MM-YYYY HH:MM');
      });
      this.source = new LocalDataSource(this.data); // create the source
    } else {
      this.toastr.error('Error occured ' );
    }
  });
}
onCustomAction(event) {
  localStorage.setItem('stockRequestId', event.data.pk_bint_id);
  localStorage.setItem('stockRequestType', 'to');
  localStorage.setItem('previousUrl','stockrequest/requestedlist');
  
  this.router.navigate(['stockrequest/stockrequestview']);
}
}
