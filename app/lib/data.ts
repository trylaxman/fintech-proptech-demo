export type TenantStatus='On time'|'Late'|'Pending';
export const tenants=[
 {id:1,name:'Ava Patel',email:'ava@example.com',unit:'A-1204',points:1840,streak:8,status:'On time' as TenantStatus,connected:true,activated:true},
 {id:2,name:'Noah Williams',email:'noah@example.com',unit:'B-803',points:920,streak:3,status:'Pending' as TenantStatus,connected:true,activated:true},
 {id:3,name:'Mia Khan',email:'mia@example.com',unit:'C-210',points:420,streak:0,status:'Late' as TenantStatus,connected:false,activated:false},
 {id:4,name:'Leo Brown',email:'leo@example.com',unit:'A-611',points:1320,streak:6,status:'On time' as TenantStatus,connected:true,activated:true}
];
export const rewards=[
 {title:'£10 Grocery Voucher',points:1000,tag:'Popular'},
 {title:'Gym Day Pass',points:850,tag:'Wellness'},
 {title:'Rent Streak Badge',points:500,tag:'Achievement'},
 {title:'Coffee Subscription Credit',points:700,tag:'Local'}
];
export const chart=[{m:'Jan',on:78,late:22},{m:'Feb',on:81,late:19},{m:'Mar',on:84,late:16},{m:'Apr',on:88,late:12},{m:'May',on:91,late:9},{m:'Jun',on:94,late:6}];
