export const getStyles = (type: string) => {
  switch (type) {
    case 'success': {
      return {
        backgroundColor: '#def1d7',
        titleColor: '#1f8722',
        descriptionColor: '#1fa722',
      };
    }
    case 'warning': {
      return {
        backgroundColor: '#fef7ec',
        titleColor: '#f08135',
        descriptionColor: '#f08135',
      };
    }
    case 'error': {
      return {
        backgroundColor: '#fae1db',
        titleColor: '#d9100a',
        descriptionColor: '#d9100a',
      };
    }
    default:
      return {
        backgroundColor: 'white',
        titleColor: 'black',
        descriptionColor: 'grey',
      };
  }
};
