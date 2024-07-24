// import * as SPLAT from "gsplat";

// const scene = new SPLAT.Scene();
// const camera = new SPLAT.Camera();
// const renderer = new SPLAT.WebGLRenderer();
// const controls = new SPLAT.OrbitControls(camera, renderer.domElement);

// async function main() {
//     const url =  // "https://huggingface.co/datasets/prakashknaikade/3DGS_Results/resolve/main/taylor_swift.splat?download=true";
//     // "https://huggingface.co/datasets/prakashknaikade/3DGS_Results/resolve/main/man_crop.splat?download=true";
//     "https://huggingface.co/datasets/prakashknaikade/3DGS_Results/resolve/main/taylor_swift_sh_0_cropped.splat?download=true";
//     // "https://huggingface.co/datasets/prakashknaikade/3DGS_Results/resolve/main/taylor_swift_gsplat_extended_sh_0_cropped.splat?download=true";
   
//     await SPLAT.Loader.LoadAsync(url, scene, () => {});

//     const frame = () => {
//         controls.update();
//         renderer.render(scene, camera);

//         requestAnimationFrame(frame);
//     };

//     requestAnimationFrame(frame);
// }

// main();


import * as SPLAT from "gsplat";

let scene = new SPLAT.Scene();
const camera = new SPLAT.Camera();
const renderer = new SPLAT.WebGLRenderer();
const controls = new SPLAT.OrbitControls(camera, renderer.domElement);

document.getElementById('viewer')?.appendChild(renderer.domElement);

async function loadFile(url: string) {
    // Create a new scene
    scene = new SPLAT.Scene();

    // Load the new file
    await SPLAT.Loader.LoadAsync(url, scene, () => {});

    // Start rendering the new scene
    const frame = () => {
        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);
}

// Attach event listener to file selector
document.getElementById('fileSelector')?.addEventListener('change', (event: Event) => {
    const url = (event.target as HTMLSelectElement).value;
    loadFile(url);
});

// Initial file load
loadFile('https://huggingface.co/datasets/prakashknaikade/3DGS_Results/resolve/main/taylor_swift_gsplat_extended_sh_0_cropped.splat?download=true');