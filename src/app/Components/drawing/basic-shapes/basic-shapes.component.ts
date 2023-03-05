import { Component, ElementRef, ViewChild } from '@angular/core';
import { Surface } from '@progress/kendo-drawing';
import { drawScene } from './draw.scene';

@Component({
  selector: 'app-basic-shapes',
  templateUrl: './basic-shapes.component.html',
  styleUrls: ['./basic-shapes.component.scss']
})
export class BasicShapesComponent {
  @ViewChild("surface")
  private surfaceElement: ElementRef;
  private surface: Surface;

  public ngAfterViewInit(): void {
    drawScene(this.createSurface());
  }

  public ngOnDestroy() {
    this.surface.destroy();
  }

  private createSurface(): Surface {
    // Obtain a reference to the native DOM element of the wrapper
    const element = this.surfaceElement.nativeElement;

    // Create a drawing surface
    this.surface = Surface.create(element);

    return this.surface;
  }
}
