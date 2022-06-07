//return the total number of smiling faces in the array
function countSmileys(arr) {
  return arr.reduce((count, face) => {
    if (face.length == 2) {
      if (
        (face[0] == ":" || face[0] == ";") &&
        (face[1] == ")" || face[1] == "D")
      ) {
        count++;
      }
    } else if (face.length == 3) {
      if (
        (face[0] == ":" || face[0] == ";") &&
        (face[1] == "-" || face[1] == "~") &&
        (face[2] == ")" || face[2] == "D")
      ) {
        count++;
      }
    }
    return count;
  }, 0);
}

// function countSmileys(arr) {
//     return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
//   }

Test.describe("Basic testing", function () {
  it("", (_) => {
    Test.assertEquals(countSmileys([]), 0);
    Test.assertEquals(countSmileys([":D", ":~)", ";~D", ":)"]), 4);
    Test.assertEquals(countSmileys([":)", ":(", ":D", ":O", ":;"]), 2);
    Test.assertEquals(countSmileys([";]", ":[", ";*", ":$", ";-D"]), 1);
  });
});
