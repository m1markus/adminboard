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

    this.arifactService.getArtifacts()
      .subscribe(res => {
        this.artifacts = res.filter(artifact => {
          /*
          // this works kind of
          if (artifact.application === "kl-amelie") {
            return true
          } */

          /*
          // this works kind of
          if (artifact.application === "app_ch_pablo" &&
              artifact.server.startsWith('Openshift')) {
            return true
          } */

          /*
          // this works kind of
          if (artifact.application === "app_ch_impdk" &&
              artifact.server === 'as_ch_impdk') {
            return true
          } */

          // this works kind of
          if (artifact.application === "app_ch_bld" &&
              artifact.server === 'as_ch_bld') {
            return true
          }

          return false
        })
      });

    /*
    this.arifactService.getArtifacts().subscribe({
      error: (err) => { console.error(err) },
      complete: () => { console.log('all data fetched!!!') }
    }); */
  }

}
