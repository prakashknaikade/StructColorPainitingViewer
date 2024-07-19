import * as SPLAT from "gsplat";

const scene = new SPLAT.Scene();
const camera = new SPLAT.Camera();
const renderer = new SPLAT.WebGLRenderer();
const controls = new SPLAT.OrbitControls(camera, renderer.domElement);

async function main() {
    const url =  // "https://huggingface.co/datasets/prakashknaikade/3DGS_Results/resolve/main/taylor_swift.splat?download=true";
    // "https://huggingface.co/datasets/prakashknaikade/3DGS_Results/resolve/main/man_crop.splat?download=true";
    "https://huggingface.co/datasets/prakashknaikade/3DGS_Results/resolve/main/taylor_swift_sh_0_cropped.splat?download=true";
    // "https://huggingface.co/datasets/prakashknaikade/3DGS_Results/resolve/main/taylor_swift_gsplat_extended_sh_0_cropped.splat?download=true";
   
    await SPLAT.Loader.LoadAsync(url, scene, () => {});

    const frame = () => {
        controls.update();
        renderer.render(scene, camera);

        requestAnimationFrame(frame);
    };

    requestAnimationFrame(frame);
}

main();


