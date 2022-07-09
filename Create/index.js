module.exports = async function(context, req){
  const responseMessage = "responseMessage";
  context.res = {
    status: 200,
    body: responseMessage
  };

}