import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatInputModule],
})
export class MaterialModule { }
