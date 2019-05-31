import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';
import { useAnimation } from '@angular/animations';
import { healthMeter} from '../AnimationManager';
import * as PlayerManager from '../PlayerManager';
import { Team, Player } from '../PlayerManager';

@Component({
  selector: 'app-gunner',
  templateUrl: './gunner.component.html',
  styleUrls: ['./gunner.component.css'],
  animations: [
    healthMeter
  ]
})
export class GunnerComponent implements OnInit {
  isGameStarted: boolean = false;
  health: number;

  constructor(
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['role']);
    })
    console.log('players from gunner component ->', PlayerManager.getPlayers());
    let playerModel: any;
    this.isGameStarted = true;
    // Grab canvas HTML tag
    const canvas: any = document.getElementById('renderCanvas');

    const delayCreateScene = () => {
      // Create a scene.
      const scene = new BABYLON.Scene(engine);
      // const hdrTexture = new BABYLON.CubeTexture('./assets/backgrounds/sample.dds', scene);
      // scene.createDefaultSkybox(hdrTexture, true, 10000);
      // Create a camera
      const camera = new BABYLON.ArcRotateCamera('camera1', 0,  Math.PI / 2, 10, BABYLON.Vector3.Zero(), scene);
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
    this.health = 10;
  }

  get healthChange() {
    return String(this.health);
  }

  damageTaken() {
    if (this.health > 0) {
      this.health -= 1;
    }
  }

}
