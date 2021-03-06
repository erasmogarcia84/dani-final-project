import React, { useEffect } from 'react';
import {
  Text, View, FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { addOrderProduct, loadOrderProductsList, deleteOrderProduct } from '../../redux/actions/productsActions';
import totalPrice from './totalPrice';
import styles from './OrderStyles';

function Order({ orderList, dispatch, mongoUser }) {
  const navigation = useNavigation();

  useEffect(() => {
    if (!orderList?.length && mongoUser?.sub) {
      dispatch(loadOrderProductsList(mongoUser.sub));
    }
  },
  [orderList, mongoUser]);

  return (
    orderList.length !== 0
    && (
    <View style={{ flex: 1 }}>
      <FlatList
        ListHeaderComponent={(
          <View style={styles.titleContainer}>
            <TouchableOpacity
              onPress={() => navigation.dispatch(CommonActions.goBack())}
            >
              <Icon
                name="close"
                size={32}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Mi Pedido</Text>
          </View>
    )}
        data={orderList}
        horizontal={false}
        // eslint-disable-next-line no-unused-vars
        keyExtractor={(item, _index) => item._id}
        renderItem={({ item }) => (
          <View style={styles.productView}>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => dispatch(deleteOrderProduct(item.product, mongoUser))}
              >
                <Icon
                  color="#FFF"
                  name="minus"
                  size={30}
                />
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => dispatch(addOrderProduct(item.product, mongoUser))}
              >
                <Icon
                  color="#FFF"
                  name="plus"
                  size={30}
                />
              </TouchableOpacity>
              <View style={styles.productInfo}>
                <Text style={styles.productTitle}>{item.product.name}</Text>
                <Text style={styles.price}>{`${item.product.price?.toFixed(2)} €`}</Text>
              </View>
            </View>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalAmount}>{`${totalPrice(orderList)} €`}</Text>
      </View>
      <TouchableOpacity style={styles.submit}>
        <Text style={styles.submitText}>Enviar pedido a cocina</Text>
        <Icon
          name="arrowright"
          size={32}
          color="white"
        />
      </TouchableOpacity>
    </View>
    )
  );
}

Order.propTypes = {
  dispatch: PropTypes.func.isRequired,
  orderList: PropTypes.arrayOf(PropTypes.object),
  mongoUser: PropTypes.shape({ sub: PropTypes.string }),
};

Order.defaultProps = {
  orderList: [],
  mongoUser: {},
};

function mapStateToProps({ orderReducer, authReducer }) {
  return {
    orderList: orderReducer.orderList,
    mongoUser: authReducer.user,
  };
}

export default connect(mapStateToProps)(Order);
