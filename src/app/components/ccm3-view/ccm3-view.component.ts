import { Component, OnInit } from '@angular/core';
import { ArtifactService } from 'src/app/services/artifact.service';
import { Artifact } from 'src/app/shared/artifact'

@Component({
  selector: 'app-ccm3-view',
  templateUrl: './ccm3-view.component.html',
  styleUrls: ['./ccm3-view.component.sass']
})
export class Ccm3ViewComponent implements OnInit {

  artifacts: Artifact[];

  constructor(private arifactService: ArtifactService) {
    this.artifacts = [];
  }

  ngOnInit(): void {
    console.log('TOTO-99 ngOnInit()... ')

    this.arifactService.getArtifacts().subscribe({
      error: (err) => { console.error(err) },
      complete: () => { console.log('all data fetched!!!') }
    });
  }

}
