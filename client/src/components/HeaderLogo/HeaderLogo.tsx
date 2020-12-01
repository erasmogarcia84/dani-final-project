import { Image, StyleSheet } from 'react-native'
import { Header } from 'react-native-elements'
import React from 'react'
import styles from '../../../styles/styles'

export default function HeaderLogo () {
  return (
      <Header
          centerComponent={
              <Image
                  source={{
                    uri:
              // eslint-disable-next-line max-len
              'https://trello-attachments.s3.amazonaws.com/5fc4dc9893cb2246bcf25278/5fc4dc9993cb2246bcf252be/b8740e39ac1a9c32d6142c96dde0b757/nowaitr-row-logo.png'
                  }}
                  style={style.logo}
              />
      }
          containerStyle={style.container}
          placement="center"
      />
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: styles.yellow,
    elevation: 2,
    height: 100,
    shadowColor: '#000',
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41
  },
  logo: {
    height: 200,
    width: 200
  }
})