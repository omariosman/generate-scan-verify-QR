const dataUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAYAAAB1PADUAAAAAklEQVR4AewaftIAAATjSURBVO3BS6ocQRAEwfBi7n9ll5a5Kmg65+lDmOFvqVpyUrXopGrRSdWik6pFJ1WLTqoWnVQtOqladFK16KRq0UnVopOqRSdVi06qFp1ULfrkJSA/Sc0EZJOaGyBPqJmA3KiZgPwkNW+cVC06qVp0UrXok2VqNgG5UfMEkBsgN2omIJOaGzUTkCfUbAKy6aRq0UnVopOqRZ98GZAn1DwBZFIzAblRcwNkAnID5Ak1bwB5Qs03nVQtOqladFK16JN/nJqfpOYGyKRmAjIBmdT8y06qFp1ULTqpWvTJfwbIpGYCcgPkBsikZlIzAZnUTED+JydVi06qFp1ULfrky9R8E5BJzY2aGzU3QJ5Q801q/iYnVYtOqhadVC36ZBmQvwmQSc0EZFIzAZnUTEAmNROQSc0bQP5mJ1WLTqoWnVQtwt/yHwHyhJobIG+omYBMav4nJ1WLTqoWnVQt+uQlIJOaCcik5gkgN2omNROQSc0E5Ak1TwDZBGRScwNkUjMBmdS8cVK16KRq0UnVok9eUjMBuQEyqZmATGomIDdAJjUTkEnNBOQNIJOaCcgEZFIzAZnU3AD5k06qFp1ULTqpWvTJHwZkUjMBmdS8oWYCMqm5ATKpuQFyo2YCcgPkb3ZSteikatFJ1SL8LS8AeULNBORGzQTkRs0EZFJzA2RS801AbtRMQCY1E5BJzU86qVp0UrXopGrRJy+puQFyo2YCMgGZ1NwAeQLIE0Bu1NwAeQLIv+SkatFJ1aKTqkWfvATkRs0NkEnNE0AmNU+oeULNBOQGyBNqJiBvAJnUTEAmNW+cVC06qVp0UrXok2VqboDcANkEZJOaJ9RMQDYBmdT8SSdVi06qFp1ULfrkD1MzAZnUTEAmNROQN9RMQCYgN0CeUPOTgExqNp1ULTqpWnRSteiTl9RMQG7UTEAmNROQGyA3ap4AcqPmBshPUjMBmdRMaiYgk5o3TqoWnVQtOqla9MlfTs0EZFJzA2RSMwH5JjUTkAnIpGYTkEnNN51ULTqpWnRSteiTl4DcqHkDyKTmBsikZgIyqXkCyKRmUvOEmv/JSdWik6pFJ1WL8Ld8EZAbNROQSc0bQG7UTEAmNW8AmdTcAJnU/EtOqhadVC06qVr0yUtAnlDzBJAn1ExqJiATkCeAbAJyA+QNNROQSc2mk6pFJ1WLTqoW4W/5hwGZ1DwBZFLzBJAn1ExAJjVPAJnU/EknVYtOqhadVC365CUgP0nNDZBJzY2aCciNmp8EZFJzA+RGzQRkUvPGSdWik6pFJ1WLPlmmZhOQGzUTkCeATGomIBOQGzU3QJ5Q84aan3RSteikatFJ1aJPvgzIE2reUDMBmdRMaiYgN2pugLwB5A01E5BJzTedVC06qVp0UrXok/8MkBsgN2omIG+oeQLIpGYCcgNkUjMBmdRsOqladFK16KRq0Sf/OCCTmgnIpOYGyKRmAjKpmdTcALlRc6NmAjKpeQLIpOaNk6pFJ1WLTqoWffJlar5JzQTkBsgTQCY1N0AmNW8AeQLIpGZS800nVYtOqhadVC36ZBmQnwRkUjMBuVFzA2QC8oaaCcgE5EbNDZAngExq3jipWnRSteikahH+lqolJ1WLTqoWnVQtOqladFK16KRq0UnVopOqRSdVi06qFp1ULTqpWnRSteikatFJ1aJfE0sjhfdRskwAAAAASUVORK5CYII=";

// Extract the base64 encoded image data from the Data URL
const base64Data = dataUrl.replace(/^data:image\/png;base64,/, "");

// Create a Buffer from the base64 encoded image data
const buffer = Buffer.from(base64Data, "base64");
// You can now use the buffer to further process the decoded image data
// For example, you can save it to a file, display it in an image tag, or process it using image manipulation libraries.

// Here's an example of saving the QR code image to a file using the fs module:
const fs = require("fs");

// Specify the file path where you want to save the image
const filePath = "./qrcode.png";

// Write the buffer data to the file
fs.writeFileSync(filePath, buffer);

// After saving the image, you can perform further actions as per your requirements.
