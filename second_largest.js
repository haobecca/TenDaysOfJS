function getSecondLargest(nums) {
    let uiniqueArr = Array.from(new Set(nums));
    let secondLargest = uiniqueArr.sort((x,y) => x < y)[1];

    // Complete the function
    return secondLargest
}