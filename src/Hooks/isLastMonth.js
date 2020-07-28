export default function isLastMonth(timestamp) {
    var now = + new Date()
    var monthAgo = now - 2592000000
    if ( monthAgo < timestamp ) {
      return true;
    } else {
      return false;
    }
}