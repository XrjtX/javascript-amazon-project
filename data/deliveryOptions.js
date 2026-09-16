import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';


export const deliveryOptions = [{
    id: '1',
    deliveryDays: 7,
    priceCents: 0
  }, {
    id: '2',
    deliveryDays: 3,
    priceCents: 499
  }, {
    id: '3',
    deliveryDays: 1,
    priceCents: 999
  }];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });

  return deliveryOption || deliveryOptions[0];
}

// export function calculateDeliveryDate(deliveryOption) {
//   const today = dayjs();
//   let n = deliveryOption.deliveryDays;
//   let i = 0;
//   let deliveryDay;
//   deliveryDay = today.format('dddd');
//   while(i<=n) {
   
//     if (deliveryDay !== 'Sunday' || deliveryDay !== 'Saturday') {
//       deliveryDay = deliveryDay.add(
//         1,
//        'days');
//        i--;
//     }
//     else {
//       n++;
//     }
    
//   }

//   // const deliveryDate = today.add(
//   //   deliveryOption.deliveryDays,
//   //   'days'
//   // );
//   const dateString = deliveryDay.format('dddd, MMMM D');
//   return dateString;
// }

export function calculateDeliveryDate(deliveryOption) {
  let deliveryDay = dayjs();
  let n = deliveryOption.deliveryDays;
  let daysAdded = 0;

  while (daysAdded < n) {
    deliveryDay = deliveryDay.add(1, 'day');
    const dayName = deliveryDay.format('dddd');
    if (dayName !== 'Sunday' && dayName !== 'Saturday') {
      daysAdded++;
    }
  }

  return deliveryDay.format('dddd, MMMM D');
}