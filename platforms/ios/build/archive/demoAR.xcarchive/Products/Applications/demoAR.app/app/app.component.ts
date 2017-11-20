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
  
  // All these are valid plane materials:
  // public planeMaterial = "Assets.scnassets/Materials/tron/tron-diffuse.png";
  // public planeMaterial = new Color("red");
  public planeMaterial = <ARMaterial>{
    diffuse: new Color("white"),
    transparency: 0.3
  };

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
        console.log(( -1 * args.position.x / 100));
        console.log( -1 * args.position.y / 100);
        console.log( args.position.z );
        const ar: AR = args.object;
        /*

                ar.addBox({
                    position: {
                        x: ( -1 * args.position.x / 100),
                        y: ( -1 * args.position.y / 100),
                        z: -20
                    },
                    dimensions: {
                        x: 0.25,
                        y: 0.25,
                        z: 0.25
                    },
                    chamferRadius: 0.01, // 'rounded corners', this is relative to the 'dimensions'.
                    mass: 0.2, // pass this in, so the model can 'fall'. Increase the 'position.y' value for a higher drop :)
                    materials: ["https://avatars1.githubusercontent.com/u/5982204?s=460&v=4"], // must be in App_Resources
                    onTap: (model: ARNode) => console.log("Box was tapped"),
                    onLongPress: (model: ARNode) => console.log("Box was longpressed")
                }).then(arNode => console.log("Box was added"));
      */

                        // assuming you have an 'ar' instance from either an event's 'object' property, or simply 'new AR()'.
                        ar.addModel({
                            name: "Models.scnassets/Wolf_One_dae.dae", // refers to a file in App_Resources, see the demo app for examples
                            childNodeName: null, // optional; if you only need 1 node within the model, then set its name here
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
                            onTap: (model: ARNode) => console.log("Model was tapped"),
                            onLongPress: ((model: ARNode) => {
                                console.log("Model was longpressed, removing it just for show.");
                                //model.remove();
                            })
                        }).then(arNode => {
                            /* to remove the model after a few seconds, you can do this:
                            setTimeout(() => {
                                arNode.remove();
                            }, 4000);*/
                        });
        /*

                        // interact with the 'ar' object here if you like
                        ar.addText({
                            text: "Mandale mecha!!",
                            position: {
                                x: ( -1 * args.position.x / 100),
                                y: ( -1 * args.position.y / 100),
                                z: -20
                            },
                            scale: 0.1,
                            depth: 1,
                            materials: [new Color("blue")],
                            rotation: {
                                x: 0,
                                y: 0,
                                z: 0,
                                w: 45
                            }
                        });
                */
    }

  planeTapped(args: ARPlaneTappedEventData): void {
    console.log(`Plane tapped at ${args.position.x} y ${args.position.y} z ${args.position.z}`);
    const ar: AR = args.object;
    // interact with the 'ar' object here if you like
      ar.addText({
          text: "{N}",
          position: {
              x: 2.7,
              y: -0.2,
              z: -5
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
}