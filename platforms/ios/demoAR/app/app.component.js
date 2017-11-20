"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_ar_1 = require("nativescript-ar");
var color_1 = require("tns-core-modules/color");
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        // All these are valid plane materials:
        // public planeMaterial = "Assets.scnassets/Materials/tron/tron-diffuse.png";
        // public planeMaterial = new Color("red");
        this.planeMaterial = {
            diffuse: new color_1.Color("white"),
            transparency: 0.3
        };
        console.log("AR supported? " + nativescript_ar_1.AR.isSupported());
    }
    AppComponent.prototype.arLoaded = function (args) {
        console.log('ar loaded', args);
    };
    AppComponent.prototype.planeDetected = function (args) {
        console.log('plane detected', args);
    };
    AppComponent.prototype.sceneTapped = function (args) {
        console.log((-1 * args.position.x / 100));
        console.log(-1 * args.position.y / 100);
        console.log(args.position.z);
        var ar = args.object;
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
            name: "Models.scnassets/Wolf_One_dae.dae",
            childNodeName: null,
            position: {
                x: (-1 * args.position.x / 100),
                y: (-1 * args.position.y / 100),
                z: -20
            },
            rotation: {
                x: 0,
                y: 180,
                z: 0,
                w: 45
            },
            scale: 10,
            mass: 0,
            onTap: function (model) { return console.log("Model was tapped"); },
            onLongPress: (function (model) {
                console.log("Model was longpressed, removing it just for show.");
                //model.remove();
            })
        }).then(function (arNode) {
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
    };
    AppComponent.prototype.planeTapped = function (args) {
        console.log("Plane tapped at " + args.position.x + " y " + args.position.y + " z " + args.position.z);
        var ar = args.object;
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
            materials: [new color_1.Color("blue")],
            rotation: {
                x: 40,
                y: 15,
                z: 90,
                w: 45
            }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFHeUI7QUFDekIsZ0RBQStDO0FBQy9DLHNDQUEwQztBQU8xQztJQVVFO1FBUkEsdUNBQXVDO1FBQ3ZDLDZFQUE2RTtRQUM3RSwyQ0FBMkM7UUFDcEMsa0JBQWEsR0FBZTtZQUNqQyxPQUFPLEVBQUUsSUFBSSxhQUFLLENBQUMsT0FBTyxDQUFDO1lBQzNCLFlBQVksRUFBRSxHQUFHO1NBQ2xCLENBQUM7UUFHQSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLG9CQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUMsK0JBQVEsR0FBUixVQUFTLElBQXVCO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxvQ0FBYSxHQUFiLFVBQWMsSUFBOEI7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsa0NBQVcsR0FBWCxVQUFZLElBQTRCO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBRSxDQUFDO1FBQy9CLElBQU0sRUFBRSxHQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFtQkE7UUFFZ0IscUdBQXFHO1FBQ3JHLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDUixJQUFJLEVBQUUsbUNBQW1DO1lBQ3pDLGFBQWEsRUFBRSxJQUFJO1lBQ25CLFFBQVEsRUFBRTtnQkFDTixDQUFDLEVBQUUsQ0FBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7Z0JBQ2hDLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFDaEMsQ0FBQyxFQUFFLENBQUMsRUFBRTthQUNUO1lBQ0QsUUFBUSxFQUFFO2dCQUNOLENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsRUFBRSxHQUFHO2dCQUNOLENBQUMsRUFBRSxDQUFDO2dCQUNKLENBQUMsRUFBRSxFQUFFO2FBQ1I7WUFDRCxLQUFLLEVBQUUsRUFBRTtZQUNULElBQUksRUFBRSxDQUFDO1lBQ1AsS0FBSyxFQUFFLFVBQUMsS0FBYSxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUEvQixDQUErQjtZQUN6RCxXQUFXLEVBQUUsQ0FBQyxVQUFDLEtBQWE7Z0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbURBQW1ELENBQUMsQ0FBQztnQkFDakUsaUJBQWlCO1lBQ3JCLENBQUMsQ0FBQztTQUNMLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1Y7Ozt1QkFHVztRQUNmLENBQUMsQ0FBQyxDQUFDO1FBQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFvQlU7SUFDZCxDQUFDO0lBRUgsa0NBQVcsR0FBWCxVQUFZLElBQTRCO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQW1CLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBRyxDQUFDLENBQUM7UUFDNUYsSUFBTSxFQUFFLEdBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMzQixpREFBaUQ7UUFDL0MsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNQLElBQUksRUFBRSxLQUFLO1lBQ1gsUUFBUSxFQUFFO2dCQUNOLENBQUMsRUFBRSxHQUFHO2dCQUNOLENBQUMsRUFBRSxDQUFDLEdBQUc7Z0JBQ1AsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNSO1lBQ0QsS0FBSyxFQUFFLEdBQUc7WUFDVixLQUFLLEVBQUUsQ0FBQztZQUNSLFNBQVMsRUFBRSxDQUFDLElBQUksYUFBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlCLFFBQVEsRUFBRTtnQkFDTixDQUFDLEVBQUUsRUFBRTtnQkFDTCxDQUFDLEVBQUUsRUFBRTtnQkFDTCxDQUFDLEVBQUUsRUFBRTtnQkFDTCxDQUFDLEVBQUUsRUFBRTthQUNSO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXhIVSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUM7O09BRVcsWUFBWSxDQXlIeEI7SUFBRCxtQkFBQztDQUFBLEFBekhELElBeUhDO0FBekhZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBBUiwgQVJNYXRlcmlhbCwgQVJQbGFuZVRhcHBlZEV2ZW50RGF0YSwgQVJMb2FkZWRFdmVudERhdGEsIEFSUGxhbmVEZXRlY3RlZEV2ZW50RGF0YSwgQVJTY2VuZVRhcHBlZEV2ZW50RGF0YSxcbiAgICBBUk5vZGVcbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hclwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50ICB7XG4gIFxuICAvLyBBbGwgdGhlc2UgYXJlIHZhbGlkIHBsYW5lIG1hdGVyaWFsczpcbiAgLy8gcHVibGljIHBsYW5lTWF0ZXJpYWwgPSBcIkFzc2V0cy5zY25hc3NldHMvTWF0ZXJpYWxzL3Ryb24vdHJvbi1kaWZmdXNlLnBuZ1wiO1xuICAvLyBwdWJsaWMgcGxhbmVNYXRlcmlhbCA9IG5ldyBDb2xvcihcInJlZFwiKTtcbiAgcHVibGljIHBsYW5lTWF0ZXJpYWwgPSA8QVJNYXRlcmlhbD57XG4gICAgZGlmZnVzZTogbmV3IENvbG9yKFwid2hpdGVcIiksXG4gICAgdHJhbnNwYXJlbmN5OiAwLjNcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZyhcIkFSIHN1cHBvcnRlZD8gXCIgKyBBUi5pc1N1cHBvcnRlZCgpKTtcbiAgfVxuXG4gICAgYXJMb2FkZWQoYXJnczogQVJMb2FkZWRFdmVudERhdGEpOiB2b2lkIHtcbiAgICAgIGNvbnNvbGUubG9nKCdhciBsb2FkZWQnLCBhcmdzKTtcbiAgICB9XG5cbiAgICBwbGFuZURldGVjdGVkKGFyZ3M6IEFSUGxhbmVEZXRlY3RlZEV2ZW50RGF0YSkge1xuICAgICAgY29uc29sZS5sb2coJ3BsYW5lIGRldGVjdGVkJywgYXJncyk7XG4gICAgfVxuXG4gICAgc2NlbmVUYXBwZWQoYXJnczogQVJTY2VuZVRhcHBlZEV2ZW50RGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygoIC0xICogYXJncy5wb3NpdGlvbi54IC8gMTAwKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCAtMSAqIGFyZ3MucG9zaXRpb24ueSAvIDEwMCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCBhcmdzLnBvc2l0aW9uLnogKTtcbiAgICAgICAgY29uc3QgYXI6IEFSID0gYXJncy5vYmplY3Q7XG4gICAgICAgIC8qXG5cbiAgICAgICAgICAgICAgICBhci5hZGRCb3goe1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogKCAtMSAqIGFyZ3MucG9zaXRpb24ueCAvIDEwMCksXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAoIC0xICogYXJncy5wb3NpdGlvbi55IC8gMTAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHo6IC0yMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiAwLjI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogMC4yNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHo6IDAuMjVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2hhbWZlclJhZGl1czogMC4wMSwgLy8gJ3JvdW5kZWQgY29ybmVycycsIHRoaXMgaXMgcmVsYXRpdmUgdG8gdGhlICdkaW1lbnNpb25zJy5cbiAgICAgICAgICAgICAgICAgICAgbWFzczogMC4yLCAvLyBwYXNzIHRoaXMgaW4sIHNvIHRoZSBtb2RlbCBjYW4gJ2ZhbGwnLiBJbmNyZWFzZSB0aGUgJ3Bvc2l0aW9uLnknIHZhbHVlIGZvciBhIGhpZ2hlciBkcm9wIDopXG4gICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsczogW1wiaHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS81OTgyMjA0P3M9NDYwJnY9NFwiXSwgLy8gbXVzdCBiZSBpbiBBcHBfUmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICAgIG9uVGFwOiAobW9kZWw6IEFSTm9kZSkgPT4gY29uc29sZS5sb2coXCJCb3ggd2FzIHRhcHBlZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgb25Mb25nUHJlc3M6IChtb2RlbDogQVJOb2RlKSA9PiBjb25zb2xlLmxvZyhcIkJveCB3YXMgbG9uZ3ByZXNzZWRcIilcbiAgICAgICAgICAgICAgICB9KS50aGVuKGFyTm9kZSA9PiBjb25zb2xlLmxvZyhcIkJveCB3YXMgYWRkZWRcIikpO1xuICAgICAgKi9cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXNzdW1pbmcgeW91IGhhdmUgYW4gJ2FyJyBpbnN0YW5jZSBmcm9tIGVpdGhlciBhbiBldmVudCdzICdvYmplY3QnIHByb3BlcnR5LCBvciBzaW1wbHkgJ25ldyBBUigpJy5cbiAgICAgICAgICAgICAgICAgICAgICAgIGFyLmFkZE1vZGVsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIk1vZGVscy5zY25hc3NldHMvV29sZl9PbmVfZGFlLmRhZVwiLCAvLyByZWZlcnMgdG8gYSBmaWxlIGluIEFwcF9SZXNvdXJjZXMsIHNlZSB0aGUgZGVtbyBhcHAgZm9yIGV4YW1wbGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlTmFtZTogbnVsbCwgLy8gb3B0aW9uYWw7IGlmIHlvdSBvbmx5IG5lZWQgMSBub2RlIHdpdGhpbiB0aGUgbW9kZWwsIHRoZW4gc2V0IGl0cyBuYW1lIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiAoIC0xICogYXJncy5wb3NpdGlvbi54IC8gMTAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogKCAtMSAqIGFyZ3MucG9zaXRpb24ueSAvIDEwMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHo6IC0yMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm90YXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMTgwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3OiA0NVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc3M6IDAsIC8vIHBhc3MgdGhpcyBpbiwgc28gdGhlIG1vZGVsIGNhbiAnZmFsbCcuIEluY3JlYXNlIHRoZSAncG9zaXRpb24ueScgdmFsdWUgZm9yIGEgaGlnaGVyIGRyb3AgOilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRhcDogKG1vZGVsOiBBUk5vZGUpID0+IGNvbnNvbGUubG9nKFwiTW9kZWwgd2FzIHRhcHBlZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkxvbmdQcmVzczogKChtb2RlbDogQVJOb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTW9kZWwgd2FzIGxvbmdwcmVzc2VkLCByZW1vdmluZyBpdCBqdXN0IGZvciBzaG93LlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9tb2RlbC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihhck5vZGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIHRvIHJlbW92ZSB0aGUgbW9kZWwgYWZ0ZXIgYSBmZXcgc2Vjb25kcywgeW91IGNhbiBkbyB0aGlzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhck5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgNDAwMCk7Ki9cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAvKlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnRlcmFjdCB3aXRoIHRoZSAnYXInIG9iamVjdCBoZXJlIGlmIHlvdSBsaWtlXG4gICAgICAgICAgICAgICAgICAgICAgICBhci5hZGRUZXh0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIk1hbmRhbGUgbWVjaGEhIVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6ICggLTEgKiBhcmdzLnBvc2l0aW9uLnggLyAxMDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiAoIC0xICogYXJncy5wb3NpdGlvbi55IC8gMTAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgejogLTIwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogMC4xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcHRoOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsczogW25ldyBDb2xvcihcImJsdWVcIildLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHo6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHc6IDQ1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgKi9cbiAgICB9XG5cbiAgcGxhbmVUYXBwZWQoYXJnczogQVJQbGFuZVRhcHBlZEV2ZW50RGF0YSk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKGBQbGFuZSB0YXBwZWQgYXQgJHthcmdzLnBvc2l0aW9uLnh9IHkgJHthcmdzLnBvc2l0aW9uLnl9IHogJHthcmdzLnBvc2l0aW9uLnp9YCk7XG4gICAgY29uc3QgYXI6IEFSID0gYXJncy5vYmplY3Q7XG4gICAgLy8gaW50ZXJhY3Qgd2l0aCB0aGUgJ2FyJyBvYmplY3QgaGVyZSBpZiB5b3UgbGlrZVxuICAgICAgYXIuYWRkVGV4dCh7XG4gICAgICAgICAgdGV4dDogXCJ7Tn1cIixcbiAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgICB4OiAyLjcsXG4gICAgICAgICAgICAgIHk6IC0wLjIsXG4gICAgICAgICAgICAgIHo6IC01XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzY2FsZTogMC4xLFxuICAgICAgICAgIGRlcHRoOiAxLFxuICAgICAgICAgIG1hdGVyaWFsczogW25ldyBDb2xvcihcImJsdWVcIildLFxuICAgICAgICAgIHJvdGF0aW9uOiB7XG4gICAgICAgICAgICAgIHg6IDQwLFxuICAgICAgICAgICAgICB5OiAxNSxcbiAgICAgICAgICAgICAgejogOTAsXG4gICAgICAgICAgICAgIHc6IDQ1XG4gICAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cbn0iXX0=