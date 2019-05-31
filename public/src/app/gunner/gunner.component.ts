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
  isModelLoaded: boolean = false;
  team1Object: any = PlayerManager.getTeamById(1);
  team2Object: any = PlayerManager.getTeamById(2);

  constructor(
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.runGame();
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

  runGame() {

    this.isGameStarted = true;
    // Grab canvas HTML tag
    const canvas: any = document.getElementById('renderCanvas');
    const delayCreateScene = () => {
      var teamNum: number;
      this._route.params.subscribe((params: Params) => {
        teamNum = params.team;
        console.log(params.team);
      });
      // Create a scene.
      const scene: any = new BABYLON.Scene(engine);
      // const hdrTexture = new BABYLON.CubeTexture('./assets/backgrounds/sample.dds', scene);
      // scene.createDefaultSkybox(hdrTexture, true, 10000);
      // Create a camera
      // const camera = new BABYLON.ArcRotateCamera('Camera', 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);
      const camera: any = new BABYLON.DeviceOrientationCamera('DevOr_camera', new BABYLON.Vector3(0, 0, 10), scene);

      // Target the camera to scene origin.
      camera.setTarget(new BABYLON.Vector3(0, 0, -10));
      camera.angularSensibility = 10;
      camera.moveSensibility = 10;
      // Attach the camera to the canvas.
      camera.attachControl(canvas, true);
      // Append glTF model to scene.
      if (teamNum == 2) {
        BABYLON.SceneLoader.Append(
          './assets/3dModels/x-wing/',
          'scene.gltf',
          scene,
          (modelObject) => {
            this.isModelLoaded = true;
            this.team2Object.model = modelObject;
            console.log('team should have model now', this.team2Object);
            // Create a default arc rotate camera and light.
            scene.createDefaultCameraOrLight(true, true, true);
            scene.activeCamera.alpha += Math.PI;
          }
        );
      } else {
        BABYLON.SceneLoader.Append(
          './assets/3dModels/star_wars_tie_fighter/',
          'scene.gltf',
          scene,
          (modelObject) => {
            this.isModelLoaded = true;
            this.team1Object.model = modelObject;
            console.log('team should have model now', this.team1Object);
            // Create a default arc rotate camera and light.
            scene.createDefaultCameraOrLight(true, true, true);
            scene.activeCamera.alpha += Math.PI;
          }
        );
      }

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
