import assets from 'assets'
const drawerMenuItems = [
  /*--- Projects ---*/
  {
    title: 'Rapid Response',
    to: '/dashboard/volunteer/hotline/rapid-response',
    svg: assets.svg.chatHeads,
    gradient: 'cherry',
    
    childrenItems: [
      {
        title: 'Activity',
        to: '/dashboard/volunteer/hotline/rapid-response/activity',
        svg: assets.svg.lightening,
        gradient: 'redPassion',
        titleWrap: {
          bg:'white',
          px: [10,15],
        },
         wrapper: {
          display: 'flex',
          align: 'center',
        },
      },
      {
        title: 'Schedule',
        to: '/dashboard/volunteer/hotline/rapid-response/schedule',
        svg: assets.svg.flowChart,
        gradient: 'redPurple',
        titleWrap: {
          bg:'white',
          px: [10,15],
        },
         wrapper: {
          display: 'flex',
          align: 'center',
        },
      },
      {
        title: 'Reporting',
        to: '/dashboard/volunteer/hotline/rapid-response/reporting',
        svg: assets.svg.graphVisualization,
        gradient: 'redOrange',
        titleWrap: {
          bg:'white',
          px: [10,15],
        },
        wrapper: {
          display: 'flex',
          align: 'center',
        },
      },
    ]
  },
  {
    title: 'People',
    to: '/dashboard/people',
    svg: assets.svg.dna,
    gradient: 'crimson',
    childrenItems: [
      {
        title: 'Activity',
        to: '/dashboard/people/map',
        svg: assets.svg.mobileCity,
        gradient: 'crimson',
        gradientDir: '90deg',
        titleWrap: {
          bg:'white',
          px: [10,15],
        },
         wrapper: {
          display: 'flex',
          align: 'center',
        },
      },
      {
        title: 'Add',
        to: '/dashboard/person/add',
        svg: assets.svg.holePuzzle,
        gradient: 'crimson',
        gradientDir: '150deg',
        titleWrap: {
          bg:'white',
          px: [10,15],
        },
         wrapper: {
          display: 'flex',
          align: 'center',
        },
      },
      {
        title: 'Manage',
        to: '/dashboard/people/manage',
        svg: assets.svg.personGraph,
        gradient: 'crimson',
        gradientDir: '130deg',
        titleWrap: {
          bg:'white',
          px: [10,15],
        },
         wrapper: {
          display: 'flex',
          align: 'center',
        },
      },
    ]
  },
  {
    title: 'Organizations',
    to: '/dashboard/organizations',
    svg: assets.svg.castle,
    gradient: 'purple',
    childrenItems: [
      {
        title: 'DAO',
        to: '/dashboard/organizations/dao',
        svg: assets.svg.cultureEagle,
        gradient: 'purple4',
        titleWrap: {
          bg:'white',
          px: [10,15],
        },
        wrapper: {
          display: 'flex',
          align: 'center',
        },
      },
      {
        title: 'Business',
        to: '/dashboard/organizations/business',
        svg: assets.svg.familyTree,
        gradient: 'purple3',
        titleWrap: {
          bg:'white',
          px: [10,15],
        },
        wrapper: {
          display: 'flex',
          align: 'center',
        },
      }
    ]   
  },
]

export default drawerMenuItems