import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { ResultComponent } from './result.component';
import { CalculateResolve } from '../shared/resolve';

export const resultRoutes: Routes = [{
  path: 'result',
  component: ResultComponent,
  resolve: {
    calculatedResponse: CalculateResolve,
  }
}];
