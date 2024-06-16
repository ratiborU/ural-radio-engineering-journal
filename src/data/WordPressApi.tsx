import axios from "axios";

// export const getAuthorsStatic = async () => {
//   const response = await axios.get(`http://158.160.135.237:7006/wp-json/wp/v2/posts?slug=static_for_authors&_fields=acf`)
//     .then((response) => {
//       let result = response.data[0].acf;
//       console.log(result);
//       for (const key of Object.keys(result)) {
//         // result[key] = Object.entries(result[key]);
//         // console.log(Object.keys(result[key]));
//         // console.log(result[key]);
//         for (const keyBlock of Object.keys(result[key])) {
//           console.log(keyBlock);
//           // console.log(result[key][keyBlock]);
//           // console.log(Object.keys(result[key][keyBlock]));
//           for (const key2 of Object.keys(result[key][keyBlock])) {
//             // console.log(key2);
//             // console.log(result[key][keyBlock][key2])
//             if (key2 == 'text') {
//               result[key][keyBlock][key2] = result[key][keyBlock][key2];
//             } else if (key2 == 'files' || key2 == 'images') {
//               result[key][keyBlock][key2] = Object.entries(result[key][keyBlock][key2]);
//             } else if (key2 == 'list') {
//               result[key][keyBlock][key2] = Object.entries(result[key][keyBlock][key2]);
//               result[key][keyBlock][key2].sort((a, b) => a[0] > b[0] ? 1 : -1);
//               result[key][keyBlock][key2] = result[key][keyBlock][key2].map(x => x[1]);
//             } else if (key2 == 'list_custom') {
//               result[key][keyBlock][key2] = Object.entries(result[key][keyBlock][key2]);
//               result[key][keyBlock][key2].sort((a, b) => a[0] > b[0] ? 1 : -1);
//               result[key][keyBlock][key2] = result[key][keyBlock][key2].map(x => Object.values(x[1]));
//             }
//           }
//           // result[key][i][1] = Object.entries(result[key][i][1]);
//         }
//       }
//       console.log(result);
//       return result;
//     }).catch((error: Error) => {
//       throw new Error(error.message);
//     }); 
//   return response;
// }

export const getAuthorsStatic = async () => {
  const response = await axios.get(`http://158.160.135.237:7006/wp-json/wp/v2/posts?slug=static_for_authors&_fields=acf`)
    .then((response) => {
      let result = response.data[0].acf;
      // console.log(result);
      for (const key of Object.keys(result)) {
        result[key] = Object.entries(result[key]);
        const length = Object.entries(result[key]).length;
        for (let i = 0; i < length; i++) {
          for (const key2 of Object.keys(result[key][i][1])) {
            if (key2 == 'text') {
              result[key][i][1][key2] = result[key][i][1][key2];
            } else if (key2 == 'files' || key2 == 'images') {
              result[key][i][1][key2] = Object.entries(result[key][i][1][key2]);
            } else if (key2 == 'list') {
              result[key][i][1][key2] = Object.entries(result[key][i][1][key2]);
              result[key][i][1][key2].sort((a: string[], b: string[]) => a[0] > b[0] ? 1 : -1);
              result[key][i][1][key2] = result[key][i][1][key2].map((x: string[]) => x[1]);
            } else if (key2 == 'list_custom') {
              result[key][i][1][key2] = Object.entries(result[key][i][1][key2]);
              result[key][i][1][key2].sort((a: string[], b: string[]) => a[0] > b[0] ? 1 : -1);
              result[key][i][1][key2] = result[key][i][1][key2].map((x: string[]) => Object.values(x[1]));
            }
          }
        }
        // // console.log(Object.keys(result[key]));
        // // console.log(result[key]);
        // for (const keyBlock of Object.keys(result[key])) {
        //   console.log(keyBlock);
        //   // console.log(result[key][keyBlock]);
        //   // console.log(Object.keys(result[key][keyBlock]));
        //   for (const key2 of Object.keys(result[key][keyBlock])) {
        //     // console.log(key2);
        //     // console.log(result[key][keyBlock][key2])
        //     if (key2 == 'text') {
        //       result[key][keyBlock][key2] = result[key][keyBlock][key2];
        //     } else if (key2 == 'files' || key2 == 'images') {
        //       result[key][keyBlock][key2] = Object.entries(result[key][keyBlock][key2]);
        //     } else if (key2 == 'list') {
        //       result[key][keyBlock][key2] = Object.entries(result[key][keyBlock][key2]);
        //       result[key][keyBlock][key2].sort((a: string[], b: string[]) => a[0] > b[0] ? 1 : -1);
        //       result[key][keyBlock][key2] = result[key][keyBlock][key2].map((x: string[]) => x[1]);
        //     } else if (key2 == 'list_custom') {
        //       result[key][keyBlock][key2] = Object.entries(result[key][keyBlock][key2]);
        //       result[key][keyBlock][key2].sort((a: string[], b: string[]) => a[0] > b[0] ? 1 : -1);
        //       result[key][keyBlock][key2] = result[key][keyBlock][key2].map((x: string[]) => Object.values(x[1]));
        //     }
        //   }
        //   // result[key][i][1] = Object.entries(result[key][i][1]);
        // }
      }
      // console.log(result);
      return result;
    }).catch((error: Error) => {
      throw new Error(error.message);
    }); 
  return response;
}


export const getAboutJournalStatic = async () => {
  const response = await axios.get(`http://158.160.135.237:7006/wp-json/wp/v2/posts?slug=static_about_journal&_fields=acf`)
    .then((response) => {
      let result = response.data[0].acf;
      for (const key of Object.keys(result)) {
        result[key] = Object.entries(result[key]);
        const length = Object.entries(result[key]).length;
        for (let i = 0; i < length; i++) {
          for (const key2 of Object.keys(result[key][i][1])) {
            if (key2 == 'list_custom') {
              result[key][i][1][key2] = Object.entries(result[key][i][1][key2]);
              result[key][i][1][key2].sort((a: string[], b: string[]) => a[0] > b[0] ? 1 : -1);
              result[key][i][1][key2] = result[key][i][1][key2].map((x: string[]) => Object.values(x[1]));
            }
          }
        }
      }



      console.log(result);
      return result;
    }).catch((error: Error) => {
      throw new Error(error.message);
    }); 
  return response;
}

export const data = {
  "aboutJournalTitle": 'О журнале',
  "aboutJournal": [
    'Рецензируемый международный',
    'Редакция журнала отдаёт',
    'Журнал зарегистрирован'
  ],
  "JournalOrentationTitle": 'Журнал ориентирован на научные специальности:',
  "JournalOrentation": [
    '2.2.2.',
    '2.2.8.',
    '2.2.13.',
    'Включен в Объединенный каталог',
    'Полнотекстовая версия журнала',
    'Выходит с 2017 года'
  ]
}