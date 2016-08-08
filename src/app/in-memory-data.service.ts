export class  InMemoryDataService {
  createDb() {
    let heroes = [
      {id: 10, name: 'Bing Bing'},
      {id: 11, name: 'Bearman'},
      {id: 12, name: 'Mookey'},
      {id: 13, name: 'Electro'},
      {id: 14, name: 'Buggon'},
      {id: 15, name: 'Juicy Double'},
      {id: 16, name: 'Humoucas'},
      {id: 17, name: 'Buill'},
      {id: 18, name: 'Stormman'},
      {id: 19, name: 'Icebull'}
    ];
    return {heroes};
  }
}

