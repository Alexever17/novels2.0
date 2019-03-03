//sorts for the newest additions to the database
export function latestNovelAdditionsFirst(books) { 
  let newOrder = books.sort(function (a, b) {
    var datePartsA = a.dataAdded.split(".");
    var datePartsB = b.dataAdded.split(".");
    var alpha = new Date(datePartsA[2], datePartsA[1] - 1, datePartsA[0]);
    var beta = new Date(datePartsB[2], datePartsB[1] - 1, datePartsB[0]);
    return alpha.getTime() - beta.getTime()
  })
  return newOrder.reverse();
}