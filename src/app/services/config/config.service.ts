import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Redux
import { NgRedux } from '@angular-redux/store';
import { GLOBAL_CONFIG } from '../../common/actions';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    public dataConfig: any;

    constructor(
        public httpClient: HttpClient,
        public ngRedux: NgRedux<any>
    ) {

    }

    /**
     * Function get config data when start application
     */
    load(): Promise<boolean> {
        return new Promise((resolve, reject) => {

            this.httpClient.get('assets/data/config.json').subscribe((data: any) => {

                // Assigne config data
                this.dataConfig = data;

                // Update config data to store of redux
                this.ngRedux.dispatch({type: GLOBAL_CONFIG, payload: data });

                resolve(data);

            }, error => {
                reject(error);
            });

        });
    }

}
