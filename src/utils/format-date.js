export const formatDate = dateString => {
  const date = new Date(dateString);
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};

export default formatDate;
