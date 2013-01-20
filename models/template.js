module.exports = function(mongoose) {
  var collection = 'templates';
  var Schema = mongoose.Schema;
  var ObjectId = Schema.ObjectId;

  var schema = new Schema({
    
  });

  return mongoose.model(collection, schema);
};