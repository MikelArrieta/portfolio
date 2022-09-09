# Portfolio website
Personal portfolio website, created using HTML, CSS and Javascript, and [Vite](https://vitejs.dev/) as development server and build tool.

![Portfolio image](/assets/img/portfolio.png)

## Usage
Clone the project using `git clone` command:
```bash
git clone https://github.com/mikelarrieta/portfolio.git
```

Then, in the root folder of the project, install the dependencies using npm:
```bash
npm install
```

To run the development server:
```bash
npm run dev
```

To build the application for production:
```bash
npm run build
```

## Deploy to Github Pages
To deploy the website to your personal Github Pages repository, go to [*deploy.sh*](./deploy.sh) file in the root of the project and change the url below `#--change this line--#` comment to:

```bash
git push -f git@github.com:{YOUR_GITHUB_USER}/{YOUR_GITHUB_USER}.github.io.git main
```

You can deploy the website executing [*deploy.sh*](./deploy.sh) in your terminal.

```bash
./deploy.sh
```

## Third party tools used
- [Unicons](https://iconscout.com/unicons): Icons
- [Swipper](https://swiperjs.com/): Touch slider
- [Toastify JS](https://apvarun.github.io/toastify-js/): Showing toasts
- [EmailJS](https://www.emailjs.com/): Email sending automation
- [Favicon Generator](https://favicon.io/favicon-generator/): Generating favicons
- [Remove Background](https://www.remove.bg/) Remove background from images
- [Blob Maker](https://www.blobmaker.app/) Image blobs

## License
[MIT](https://choosealicense.com/licenses/mit/)
