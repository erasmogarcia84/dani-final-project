function userController (User) {
  function getMethod (req, res) {
    User.findOne({ _id: req.params.userId })
      .populate('favs')
      .populate('restaurant')
      .populate('saved.product')
      .populate('sent')
      .exec((errorFindUser, user) => (errorFindUser
        ? res.send(errorFindUser)
        : res.json(user)))
  }

  function patchMethod (req, res) {
    const productId = req.body._id
    const query = { _id: req.params.userId }

    User.findOne(query, (error, success) => {
      if (error) {
        return res.send(error)
      }
      const productFound = success.saved.find((productFound) => productFound.product._id.toString() === productId)
      if (productFound) {
        productFound.quantity += 1
      } else {
        success.saved.push({ quantity: 1, product: productId })
      }
      success.save()
      res.send(success)
    }).populate('saved.product')
  }

  function deleteMethod (req, res) {
    const productId = req.body._id
    const query = { _id: req.params.userId }

    User.findOne(query, (error, success) => {
      if (error) {
        return res.send(error)
      }
      const productFound = success.saved.find((productFound) => productFound.product._id.toString() === productId)
      if (productFound) {
        if (productFound.quantity === 1) {
          const index = success.saved.indexOf(productFound)
          success.saved.splice(index, 1)
        } else {
          productFound.quantity -= 1
        }
      }
      success.save()
      res.send(success)
    }).populate('saved.product')
  }

  return { getMethod, patchMethod, deleteMethod }
}

module.exports = userController
