import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

@Component({
  selector: 'app-gunner',
  templateUrl: './gunner.component.html',
  styleUrls: ['./gunner.component.css']
})
export class GunnerComponent implements OnInit {
  isGameStarted: boolean = false;


  constructor() { }

  ngOnInit() {
    let playerModel: any;
    this.isGameStarted = true;
    // Grab canvas HTML tag
    const canvas: any = document.getElementById('renderCanvas');

    const delayCreateScene = () => {
      // Create a scene.
      const scene = new BABYLON.Scene(engine);
      // Create a camera
      const camera = new BABYLON.FreeCamera(
        'camera',
        new BABYLON.Vector3(0, 5, -10),
        scene
      );
      // Target the camera to scene origin.
      camera.setTarget(BABYLON.Vector3.Zero());
      // Attach the camera to the canvas.
      camera.attachControl(canvas, false);
      // Append glTF model to scene.
      BABYLON.SceneLoader.Append(
        './assets/3dModels/halcon_milenario/',
        'scene.gltf',
        scene,
        (mesh) => {
          // Assign gltf object model to a player
          playerModel = mesh;
          console.log('model object ->', playerModel);
          // Create a default arc rotate camera and light.
          scene.createDefaultCameraOrLight(true, true, true);
          // The default camera looks at the back of the asset.
          // Rotate the camera by 180 degrees to the front of the asset.
        }
      );
      return scene;
    };

    const engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });
    const scene = delayCreateScene();
    // Create loop to have game run continously
    engine.runRenderLoop( () => {
      if (scene) {
        scene.render();
      }
    });
    window.addEventListener('resize', () => {
      engine.resize();
    });
  }

}
