import stylesType from '../../../styles/stylesType';

const styles = {
  container: {
    backgroundColor: stylesType.gray,
    display: 'flex',
    flexDirection: 'row',
    position: 'fixed',
    height: 80,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  productsContainer: {
    paddingTop: 10,
    alignItems: 'center',
    flex: 1,
  },
  products: {
    fontSize: 20,
  },
  waiterContainer: {
    backgroundColor: stylesType.brown,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bottom: 30,
    height: 120,
    width: 120,
    borderRadius: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  favContainer: {
    paddingTop: 10,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    height: 50,
    width: 50,
    padding: 30,
  },
};

export default styles;
