/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 * Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.
 */
const fill = (image, i, j, newColor) => {
    if (i < 0 || j < 0 || i >= image.length || j >= image[i].length || image[i][j] !== 1) {
        return
    }
    image[i][j] = newColor
    fill(image, i + 1, j, newColor)
    fill(image, i - 1, j, newColor)
    fill(image, i, j + 1, newColor)
    fill(image, i, j - 1, newColor)
}

const floodFill = (image, sr, sc, newColor) => {
    if (image[sr][sc] === newColor) {
        return image
    }
    fill(image, sr, sc, newColor)
    return image
};

console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2))
