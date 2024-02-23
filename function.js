const printMenu = (day) => {
    switch (day.toLowerCase()) {
      case 'monday':
        console.log('Monday Menu: ShevBhaji');
        break;
      case 'tuesday':
        console.log('Tuesday Menu: MisalPav');
        break;
      case 'wednesday':
        console.log('Wednesday Menu: Paneer');
        break;
      case 'thursday':
        console.log('Thursday Menu: Biryani');
        break;
      case 'friday':
        console.log('Friday Menu: Dal');
        break;
      case 'saturday':
        console.log('Saturday Menu: Chiken');
        break;
      case 'sunday':
        console.log('Sunday Menu: Pizza');
        break;
      default:
        console.log('Invalid day input. Please enter a valid day of the week.');
    }
  };
  
  printMenu('Sunday'); 
  printMenu('Monday');
  printMenu('Tuesday');
  printMenu('wednesday');
  printMenu('friday'); 
  printMenu('saturday');  
  printMenu('InvalidDay');
  