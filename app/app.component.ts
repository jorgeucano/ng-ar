import {
    AR, ARMaterial, ARPlaneTappedEventData, ARLoadedEventData, ARPlaneDetectedEventData, ARSceneTappedEventData,
    ARNode
} from "nativescript-ar";
import { Color } from "tns-core-modules/color";
import { Component } from '@angular/core';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})

export class AppComponent  {

  public planeMaterial = <ARMaterial>{
    diffuse: new Color("red"),
    transparency: 0.3
  };

  movers$: any;
  x; y;

  constructor() {
    console.log("AR supported? " + AR.isSupported());
  }

    arLoaded(args: ARLoadedEventData): void {
      console.log('ar loaded', args);
    }

    planeDetected(args: ARPlaneDetectedEventData) {
      console.log('plane detected', args);
    }

    sceneTapped(args: ARSceneTappedEventData) {
        const ar: AR = args.object;
        this.x = args.position.x;
        this.y = args.position.y;

        this.movers$ = ar.addModel({
            name: "Models.scnassets/Wolf_One_dae.dae",
            childNodeName: null,
            position: {
                x: ( -1 * args.position.x / 100),
                y: ( -1 * args.position.y / 100),
                z: -20
            },
            rotation: {
                x: 0,
                y: 180,
                z: 0,
                w: 45
            },
            scale: 10,
            mass: 0, // pass this in, so the model can 'fall'. Increase the 'position.y' value for a higher drop :)
            onTap: (model: ARNode) => {
                console.log(model);
                model.position = {
                    x: ( -1 * this.x / 150),
                    y: ( -1 * this.y / 150),
                    z: -20
                };
            },
            onLongPress: ((model: ARNode) => {
                model.remove();
            })
        }).then(arNode => {
            setTimeout(() => {
                arNode.remove();
            }, 15000);
        });
    }


  planeTapped(args: ARPlaneTappedEventData): void {
    console.log(`Plane tapped at ${args.position.x} y ${args.position.y} z ${args.position.z}`);
    const ar: AR = args.object;
    // interact with the 'ar' object here if you like
      ar.addText({
          text: "Hello ng-colombia!",
          position: {
              x: args.position.x,
              y: args.position.y,
              z: args.position.z
          },
          scale: 0.1,
          depth: 1,
          materials: [new Color("blue")],
          rotation: {
              x: 40,
              y: 15,
              z: 90,
              w: 45
          }
      });
  }

  ngColombia(args: ARSceneTappedEventData) {
      // aca deberia genrar el ngcolombia (uno por uno) o todos juntos! pensar en eso
  }
}