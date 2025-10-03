function displayLikes(arr) {
  likesCount = arr.length;
  likesStr = "";

  switch (likesCount) {
    case 0:
      likesStr += "no one likes this";
      break;
    case 1:
      likesStr += `${arr[0]} likes this`;
      break;
    case 2:
      likesStr += `${arr[0]} and ${arr[1]} like this`;
      break;
    case 3:
      likesStr += `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
      break;
    default:
      likesStr += `${arr[0]}, ${arr[1]} and ${likesCount - 2} others like this`;
  }

  return likesStr;
}

module.exports = displayLikes;
