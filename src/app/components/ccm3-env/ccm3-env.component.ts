import { Component, Input } from '@angular/core';
import { Artifact } from 'src/app/shared/artifact';

@Component({
  selector: 'app-ccm3-env',
  templateUrl: './ccm3-env.component.html',
  styleUrls: ['./ccm3-env.component.sass']
})
export class Ccm3EnvComponent {

  @Input() stage: string = ''
  @Input() artifacts: Artifact[] = []

  getFilteredArtifacts(): Artifact[] {
    return this.artifacts.filter(art => art.stage === this.stage)
  }
}
