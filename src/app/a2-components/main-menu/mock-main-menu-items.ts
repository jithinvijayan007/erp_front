import { MainMenuItem } from './main-menu-item';

export const MAINMENUITEMS: MainMenuItem[] = [
  {
    title: 'Enquiry',
    icon: 'fa fa-edit',
    active: false,
    groupTitle: false,
    sub: [
      {
        title: 'Add enquiry',
        routing: '/crm/addenquirymaster',
        // routing: '/crm',
        visible: true

      },
      // {
      //   title: 'Add enquiry',
      //   routing: '/crm/addtravellead',
      //   // routing: '/crm',

      //   visible: false

      // },
      {
        title: 'List enquiries',
        routing: '/crm/leadlist',
        visible: true
      },
      {
        title: 'Pending enquiries',
        routing: '/crm/pendingenquiry',
        visible: true
      },
      {
        title: 'Approve follow-ups',
        routing: '/crm/approvalrequest',
        visible: true
      },
      // {
      //   title: 'Enquiry report',
      //   routing: '/crm/customerreport'
      // },
      // {
      //   title: 'View Enquiry',
      //   routing: '/crm/viewlead'
      // },
    ],
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: '',
    visible: true
  },
  {
    title: 'Users',
    icon: 'fa fa-users',
    active: false,
    groupTitle: false,
    sub: [
      {
        title: 'Add user',
        routing: '/crm/adduser',
        visible: true
      },
      {
        title: 'User list',
        routing: '/crm/userlist',
        visible: true
      }

    ],
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: '',
    visible: true
  },
  // {
  //   title: 'Document format',
  //   icon: 'fa fa-file',
  //   active: false,
  //   groupTitle: false,
  //   sub: [
  //     {
  //       title: 'Add Document',
  //       routing: '/crm/adddocument'
  //     },
  //   ],
  //   routing: '',
  //   externalLink: '',
  //   budge: '',
  //   budgeColor: '',
  // visible: true
  // },
  {
    title: 'Customer',
    icon: 'fa fa-address-book',
    active: false,
    groupTitle: false,
    sub: [
      {
        title: 'Add customer',
        routing: '/crm/addcustomer',
        visible: true
      },
      {
        title: 'Customer list',
        routing: '/crm/customerlist',
        visible: true
      }
    ],
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: '',
    visible: true
  },
  {
    title: 'Company',
    icon: 'fa fa-home',
    active: false,
    groupTitle: false,
    sub: [
      {
        title: 'Add company',
        routing: '/crm/addcompany',
        visible: true
      },
      {
        title: 'Company list',
        routing: '/crm/listcompany',
        visible: true
      },
    ],
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: '',
    visible: true
  },
  {
    title: 'Airport',
    icon: 'fa fa-plane',
    active: false,
    groupTitle: false,
    sub: [
      {
        title: 'Add airport',
        routing: '/crm/addairport',
        visible: true
      },
      {
        title: 'Airport list',
        routing: '/crm/airportlist',
        visible: true
      },
    ],
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: '',
    visible: true
  },
  {
    title: 'Airline',
    icon: 'fa fa-plane',
    active: false,
    groupTitle: false,
    sub: [
      {
        title: 'Add airline',
        routing: '/crm/addairline',
        visible: true
      },
      {
        title: 'Airline list',
        routing: '/crm/airlinelist',
        visible: true
      },
    ],
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: '',
    visible: true
  },


  {
    title: 'Branch',
    icon: 'fa fa-share-alt',
    active: false,
    groupTitle: false,
    sub: [
      {
        title: 'Add Branch',
        routing: '/crm/addbranch',
        visible: true
      },
      {
        title: 'Branch list',
        routing: '/crm/listbranch',
        visible: true
      },
    ],
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: '',
    visible: true
  },
  {
    title: 'Department',
    icon: 'fa fa-home',
    active: false,
    groupTitle: false,
    sub: [
      {
        title: 'Add department',
        routing: '/crm/adddepartment',
        visible: true
      },
      {
        title: 'Department list',
        routing: '/crm/listdepartment',
        visible: true
      },
    ],
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: '',
    visible: true
  },
  {
    title: 'Stock',
    icon: 'fa fa-home',
    active: false,
    groupTitle: false,
    sub: [
      {
        title: 'Add stock',
        routing: '/crm/addstock',
        visible: true
      },
      {
        title: 'stock list',
        routing: '/crm/stocklist',
        visible: true
      },
    ],
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: '',
    visible: true
  },
  {
    title: 'Zone',
    icon: 'fa fa-home',
    active: false,
    groupTitle: false,
    sub: [
      {
        title: 'Add zone',
        routing: '/crm/addzone',
        visible: true
      },
      {
        title: 'Zone list',
        routing: '/crm/zonelist',
        visible: true
      },
    ],
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: '',
    visible: true
  },
  {
    title: 'Territory',
    icon: 'fa fa-home',
    active: false,
    groupTitle: false,
    sub: [
      {
        title: 'Add territory',
        routing: '/crm/addterritory',
        visible: true
      },
      {
        title: 'Territory list',
        routing: '/crm/territorylist',
        visible: true
      },
    ],
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: '',
    visible: true
  },
  {
    title: 'Enquiry Source',
    icon: 'fa fa-plus-square',
    active: false,
    groupTitle: false,
    sub: [
      {
        title: 'Add Enquiry Source',
        routing: '/crm/addsource',
        visible: true
      },
      {
        title: 'Enquiry Source list',
        routing: '/crm/sourcelist',
        visible: true
      },
    ],
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: '',
    visible: true
  },
  {
    title: 'Enquiry Priority',
    icon: 'fa fa-sort',
    active: false,
    groupTitle: false,
    sub: [
      {
        title: 'Add Enquiry Priority',
        routing: '/crm/priority',
        visible: true
      },
      {
        title: 'Enquiry Priority list',
        routing: '/crm/prioritylist',
        visible: true
      },
    ],
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: '',
    visible: true
  },
  // {
  //   title: 'Supplier',
  //   icon: 'fa fa-users',
  //   active: false,
  //   groupTitle: false,
  //   sub: [
  //     {
  //       title: 'Add supplier',
  //       routing: '/crm/addsupplier'
  //     },
  //     {
  //       title: 'Supplier list',
  //       routing: '/crm/supplierlist'
  //     },
  //   ],
  //   routing: '',
  //   externalLink: '',
  //   budge: '',
  //   budgeColor: '',
  // visible: true
  // },
  // {
  //   title: 'Campaign',
  //   icon: 'fa fa-commenting-o',
  //   active: false,
  //   groupTitle: false,
  //   sub: [
  //     {
  //       title: 'Add campaign',
  //       routing: '/crm/addcampaign'
  //     },
  //     {
  //       title: 'Campaign list',
  //       routing: '/crm/campaignlist'
  //     },
  //   ],
  //   routing: '',
  //   externalLink: '',
  //   budge: '',
  //   budgeColor: '',
  // visible: true
  // },
  {
    title: 'Task',
    icon: 'fa fa-tasks',
    active: false,
    groupTitle: false,
    sub: [
      {
        title: 'Add task',
        routing: '/crm/addtask',
        visible: true
      },
      {
        title: 'Task list',
        routing: '/crm/tasklist',
        visible: true
      },
    ],
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: '',
    visible: true
  },

  {
    title: 'Brands',
    icon: 'fa fa-tasks',
    active: false,
    groupTitle: false,
    sub: [
      {
        title: 'Add Brands',
        routing: '/crm/addbrands',
        visible: true
      },
      {
        title: 'Brands list',
        routing: '/crm/brandslist',
        visible: true
      },
    ],
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: '',
    visible: true
  },

  {
    title: 'Items',
    icon: 'fa fa-tasks',
    active: false,
    groupTitle: false,
    sub: [
      {
        title: 'Add Items',
        routing: '/crm/additems',
        visible: true
      },
      {
        title: 'Items list',
        routing: '/crm/itemslist',
        visible: true
      },
    ],
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: '',
    visible: true
  },

  // {
  //   title: 'Product',
  //   icon: 'fa fa-tasks',
  //   active: false,
  //   groupTitle: false,
  //   sub: [
  //     {
  //       title: 'Add Product',
  //       routing: '/crm/addcategory',
  //       visible: true
  //     },
  //   ],
  //   routing: '',
  //   externalLink: '',
  //   budge: '',
  //   budgeColor: '',
  //   visible: true
  // },

  {
    title: 'Groups',
    icon: 'fa fa-users',
    active: false,
    groupTitle: false,
    sub: [
      {
        title: 'Add group',
        routing: '/crm/groupadd',
        visible: true
      },
      {
        title: 'Group list',
        routing: '/crm/grouplist',
        visible: true
      },
    ],
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: '',
    visible: true
  },


  // {
  //   title: 'Promo Campaign',
  //   icon: 'fa fa-cubes',
  //   active: false,
  //   groupTitle: false,
  //   sub: [
  //     {
  //       title: 'Upload Leads',
  //       routing: '/crm/uploadleads',
  //       visible: true
  //     },
  //     {
  //       title: 'Send Mail',
  //       routing: '/crm/sendmail',
  //       visible: true
  //     },
  //     {
  //       title: 'Promo list',
  //       routing: '/crm/promolist',
  //       visible: true
  //     },
  //     {
  //       title: 'Mail History',
  //       routing: '/crm/mailhistory',
  //       visible: true
  //     }
  //   ],
  //   routing: '',
  //   externalLink: '',
  //   budge: '',
  //   budgeColor: '',
  //   visible: true
  // },







  // {
  //   title: 'Scheduler',
  //   icon: 'fa fa-calendar',
  //   active: false,
  //   groupTitle : false,
  //   sub: '',
  //   routing: '/crm/calendar',
  //   externalLink: '',
  //   budge: '',
  //   budgeColor: '',
  // visible: true
  // },
  // {
  //   title: 'Scheduler_new',
  //   icon: 'fa fa-calendar',
  //   active: false,
  //   groupTitle : false,
  //   sub: '',
  //   routing: '/crm/scheduler',
  //   externalLink: '',
  //   budge: '',
  //   budgeColor: '',
  // visible: true
  // },
  {
    title: 'Enquiry Reports',
    icon: 'fa fa-bars',
    active: false,
    groupTitle : false,
    sub: [
      {
        title: 'Service report',
        routing: '/crm/report/servicereport',
        visible: true
      },
      {
        title: 'Productivity report',
        routing: '/crm/report/productivityreport',
        visible: true
      },
      {
        title: 'Customer report',
        routing: '/crm/report/customerreport',
        visible: true
      },
      {
        title: 'Branch report',
        routing: '/crm/report/branchreport',
        visible: true
      },
      {
        title: 'Source report',
        routing: '/crm/report/sourcereport',
        visible: true
      },
      {
        title: 'New customer report',
        routing: '/crm/report/new-customer-report',
        visible: true
      },
      // {
      //   title: 'Package report',
      //   routing: '/crm/report/packagereport',
      //   visible: true
      // },
      {
        title: 'Feedback report',
        routing: '/crm/report/staff-rating-report',
        visible: true
      },
      // {
      //   title: 'Country report',
      //   routing: '/crm/report/countryreport',
      //   visible: true
      // },
      // {
      //   title: 'Zone report',
      //   routing: '/crm/report/zonereport',
      //   visible: true
      // },
      // {
      //   title: 'Territory report',
      //   routing: '/crm/report/territoryreport',
      //   visible: true
      // },
    ],
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: '',
    visible: true
  },
  {
    title: 'Sales Reports',
    icon: 'fa fa-bars',
    active: false,
    groupTitle : false,
    sub: [
      {
        title: 'Service report',
        routing: '/crm/report/salesreport',
        visible: true
      },
      {
        title: 'Productivity report',
        routing: '/crm/report/salesproductivityreport',
        visible: true
      },
      {
        title: 'Source report',
        routing: '/crm/report/sales-source-report',
        visible: true
      },
      {
        title: 'Customer report',
        routing: '/crm/report/customer-sales-report',
        visible: true
      },
      {
        title: 'Branch report',
        routing: '/crm/report/sales-branch-report',
        visible: true
      },
    ],
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: '',
    visible: true
  },
  {
    title: 'Reminder',
    icon: 'fa fa-bell',
    active: false,
    groupTitle: false,
    sub: [
      {
        title: 'Add reminder',
        routing: '/crm/addreminder',
        visible: true
      },
      {
        title: 'Reminder list',
        routing: '/crm/listreminder',
        visible: true
      },
    ],
    routing: '',
    externalLink: '',
    budge: '',
    budgeColor: '',
    visible: true
  },
  // {
  //   title: 'Package',
  //   icon: 'fa fa-globe',
  //   active: false,
  //   groupTitle: false,
  //   sub: [
  //     {
  //       title: 'Add package',
  //       routing: '/crm/addpackage'
  //     },
  //     {
  //       title: 'Package list',
  //       routing: '/crm/listpackage'
  //     },
  //   ],
  //   routing: '',
  //   externalLink: '',
  //   budge: '',
  //   budgeColor: '',
  // visible: true
  // },
  // {
  //   title: 'Hotel',
  //   icon: 'fa fa-tasks',
  //   active: false,
  //   groupTitle: false,
  //   sub: [
  //     {
  //       title: 'Add hotel',
  //       routing: '/crm/addhotel'
  //     },
  //     {
  //       title: 'Hotel list',
  //       routing: '/crm/hotellist'
  //     },
  //   ],
  //   routing: '',
  //   externalLink: '',
  //   budge: '',
  //   budgeColor: '',
  // visible: true
  // },
  // {
  //   title: 'Sightseeing',
  //   icon: 'fa fa-binoculars',
  //   active: false,
  //   groupTitle : false,
  //   sub: '',
  //   routing: '/crm/sightseeing',
  //   externalLink: '',
  //   budge: '',
  //   budgeColor: '',
  // visible: true
  // },
  // {
  //   title: 'Emailconfig',
  //   icon: 'fa fa-envelope-o',
  //   active: false,
  //   groupTitle : false,
  //   sub: '',
  //   routing: '/crm/emailconfig',
  //   externalLink: '',
  //   budge: '',
  //   budgeColor: '',
  // visible: true
  // },
  // {
  //   title: 'Manage',
  //   icon: 'fa fa-bookmark-o',
  //   active: false,
  //   groupTitle : false,
  //   sub: '',
  //   routing: '/crm/manage',
  //   externalLink: '',
  //   budge: '',
  //   budgeColor: '',
  // visible: true
  // },

  // {
  //   title: 'UI Elements',
  //   icon: '',
  //   active: false,
  //   groupTitle : true,
  //   sub: '',
  //   routing: '',
  //   externalLink: '',
  //   budge: '',
  //   budgeColor: '',
  // visible: true
  // },
  // {
  //   title: 'Material components',
  //   icon: 'fa fa-briefcase',
  //   active: false,
  //   groupTitle: false,
  //   sub: [
  //     {
  //       title: 'Button',
  //       routing: '/crm/button'
  //     },
  //     {
  //       title: 'Card',
  //       routing: '/crm/card'
  //     },
  //     {
  //       title: 'Checkbox',
  //       routing: '/crm/checkbox'
  //     },
  //     {
  //       title: 'Chips',
  //       routing: '/crm/chips'
  //     },
  //     {
  //       title: 'Dialog',
  //       routing: '/crm/dialog'
  //     },
  //     {
  //       title: 'Icon',
  //       routing: '/crm/icon'
  //     },
  //     {
  //       title: 'Input',
  //       routing: '/crm/input'
  //     },
  //     {
  //       title: 'List',
  //       routing: '/crm/list'
  //     },
  //     {
  //       title: 'Menu',
  //       routing: '/crm/menu'
  //     },
  //     {
  //       title: 'Progress bar',
  //       routing: '/crm/progress-bar'
  //     },
  //     {
  //       title: 'Progress spinner',
  //       routing: '/crm/progress-spinner'
  //     },
  //     {
  //       title: 'Radio Button',
  //       routing: '/crm/radio-button'
  //     },
  //     {
  //       title: 'Select',
  //       routing: '/crm/select'
  //     },
  //     {
  //       title: 'Slider',
  //       routing: '/crm/slider'
  //     },
  //     {
  //       title: 'Slide toggle',
  //       routing: '/crm/slide-toggle'
  //     },
  //     {
  //       title: 'Snackbar',
  //       routing: '/crm/snackbar'
  //     },
  //     {
  //       title: 'Tabs',
  //       routing: '/crm/tabs'
  //     },
  //     {
  //       title: 'Toolbar',
  //       routing: '/crm/toolbar'
  //     },
  //     {
  //       title: 'Tooltip',
  //       routing: '/crm/tooltip'
  //     }
  //   ],
  //   routing: '',
  //   externalLink: '',
  //   budge: '',
  //   budgeColor: '',
  // visible: true
  // },
  // {
  //   title: 'Widgets',
  //   icon: 'fa fa-th',
  //   active: false,
  //   groupTitle : false,
  //   sub: '',
  //   routing: '/crm/widgets',
  //   externalLink: '',
  //   budge: '',
  //   budgeColor: '',
  // visible: true
  // },
  // {
  //   title: 'A2 components',
  //   icon: 'fa fa-diamond',
  //   active: false,
  //   groupTitle: false,
  //   sub: [
  //     {
  //       title: 'Alert',
  //       routing: '/crm/alert'
  //     },
  //     {
  //       title: 'Badge',
  //       routing: '/crm/badge'
  //     },
  //     {
  //       title: 'Breadcrumb',
  //       routing: '/crm/breadcrumb'
  //     },
  //     {
  //       title: 'Card',
  //       routing: '/crm/a2-card'
  //     },
  //     {
  //       title: 'File',
  //       routing: '/crm/file'
  //     }
  //   ],
  //   routing: '',
  //   externalLink: '',
  //   budge: '',
  //   budgeColor: '',
  // visible: true
  // },
  // {
  //   title: 'Typography',
  //   icon: 'fa fa-font',
  //   active: false,
  //   groupTitle : false,
  //   sub: '',
  //   routing: '/crm/typography',
  //   externalLink: '',
  //   budge: '',
  //   budgeColor: '',
  // visible: true
  // },

  // {
  //   title: 'Calendar',
  //   icon: 'fa fa-calendar',
  //   active: false,
  //   groupTitle : false,
  //   sub: '',
  //   routing: '/crm/calendar',
  //   externalLink: '',
  //   budge: 'New',
  //   budgeColor: '#008000'
  // },
  // {
  //   title: 'Tables',
  //   icon: 'fa fa-table',
  //   active: false,
  //   groupTitle: false,
  //   sub: [
  //     {
  //       title: 'Simple table',
  //       routing: '/crm/simple-table'
  //     },
  //     {
  //       title: 'Sorting table',
  //       routing: '/crm/sorting-table'
  //     },
  //     {
  //       title: 'Filtering table',
  //       routing: '/crm/filtering-table'
  //     },
  //     {
  //       title: 'Pagination table',
  //       routing: '/crm/pagination-table'
  //     },
  //     {
  //       title: 'Bootstrap tables',
  //       routing: '/crm/bootstrap-tables'
  //     },
  //   ],
  //   routing: '',
  //   externalLink: '',
  //   budge: '',
  //   budgeColor: '',
  // visible: true
  // },
  // {
  //   title: 'Charts',
  //   icon: 'fa fa-pie-chart',
  //   active: false,
  //   groupTitle: false,
  //   sub: [
  //     {
  //       title: 'Line Chart',
  //       routing: '/crm/line-chart'
  //     },
  //     {
  //       title: 'Bar Chart',
  //       routing: '/crm/bar-chart'
  //     },
  //     {
  //       title: 'Doughnut Chart',
  //       routing: '/crm/doughnut-chart'
  //     },
  //     {
  //       title: 'Radar Chart',
  //       routing: '/crm/radar-chart'
  //     },
  //     {
  //       title: 'Pie Chart',
  //       routing: '/crm/pie-chart'
  //     },
  //     {
  //       title: 'Polar Area Chart',
  //       routing: '/crm/polar-area-chart'
  //     },
  //     {
  //       title: 'Dynamic Chart',
  //       routing: '/crm/dynamic-chart'
  //     }
  //   ],
  //   routing: '',
  //   externalLink: '',
  //   budge: '',
  //   budgeColor: '',
  // visible: true
  // },
  // {
  //   title: 'Maps',
  //   icon: 'fa fa-map-marker',
  //   active: false,
  //   groupTitle: false,
  //   sub: [
  //     {
  //       title: 'Google map',
  //       routing: '/crm/google-map'
  //     },
  //     {
  //       title: 'Leaflet map',
  //       routing: '/crm/leaflet-map'
  //     }
  //   ],
  //   routing: '',
  //   externalLink: '',
  //   budge: '',
  //   budgeColor: '',
  // visible: true
  // },
  // {
  //   title: 'Pages',
  //   icon: '',
  //   active: false,
  //   groupTitle : true,
  //   sub: '',
  //   routing: '',
  //   externalLink: '',
  //   budge: '',
  //   budgeColor: '',
  // visible: true
  // },
  // {
  //   title: 'Pages service',
  //   icon: 'fa fa-edit',
  //   active: false,
  //   groupTitle: false,
  //   sub: [
  //     {
  //       title: 'About Us',
  //       routing: '/crm/about-us'
  //     },
  //     {
  //       title: 'FAQ',
  //       routing: '/crm/faq'
  //     },
  //     {
  //       title: 'TimeLine',
  //       routing: '/crm/timeline'
  //     },
  //     {
  //       title: 'Invoice',
  //       routing: '/crm/invoice'
  //     },
  //   ],
  //   routing: '',
  //   externalLink: '',
  //   budge: 'New',
  //   budgeColor: '#008000'
  // },
  // {
  //   title: 'Extra pages',
  //   icon: 'fa fa-clone',
  //   active: false,
  //   groupTitle: false,
  //   sub: [
  //     {
  //       title: 'Sign In 1',
  //       routing: '/user/sign-in'
  //     },
  //     {
  //       title: 'Sign In 2',
  //       routing: '/crm/sign-in'
  //     },
  //     {
  //       title: 'Sign In with Social',
  //       routing: '/sign-in'
  //     },
  //     {
  //       title: 'Sign Up 1',
  //       routing: '/user/sign-up'
  //     },
  //     {
  //       title: 'Sign Up 2',
  //       routing: '/crm/sign-up'
  //     },
  //     {
  //       title: 'Forgot password',
  //       routing: '/user/forgot'
  //     },
  //     {
  //       title: 'Confirm email',
  //       routing: '/user/confirm'
  //     },
  //     {
  //       title: '404',
  //       routing: '/user/page-404'
  //     },
  //     {
  //       title: '500',
  //       routing: '/user/page-500'
  //     },
  //     {
  //       title: 'Not found',
  //       routing: '/crm/not-found'
  //     }
  //   ],
  //   routing: '',
  //   externalLink: '',
  //   budge: '',
  //   budgeColor: '',
  // visible: true
  // }


];
