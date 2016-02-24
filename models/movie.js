module.exports = function (sequelize, DataTypes){

    var Movie = sequelize.define('movie',{
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      review: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      }     
     }, //close the first opening bracket after ('movie',

    {
    classMethods: {
      createNewMovie:function(title,review,image,rating,err,success ) {
        Movie.create({
          title: title,
          review: review,
          image: image,
          rating:rating
        }).error(function(error) {
          console.log(error);
        }).then(function(movie) {
          success({ message: 'Movie added!'});
        });
      }// close createNewMovie

    } // close classMethods

  } //close classMethods outer

  )
  return Movie;
};