import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembershipRoutingModule } from './membership-routing.module';
import { MembershipComponent } from './membership.component';
//import { AddMemberComponent } from './add-member/add-member.component';
//import { EditMemberComponent } from './edit-member/edit-member.component';
//import { LayoutModule } from '@angular/cdk/layout';
//import { HeaderComponent } from '../layout/header/header.component';

import { MatCardModule, 
  MatButtonModule, 
  MatMenuModule, 
  MatIconModule, 
  MatDividerModule, 
  MatToolbarModule, 
  MatSidenavModule,             
  MatListModule,
  MatExpansionModule} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AddMemberComponent } from './add-member/add-member.component';
import { HeaderModule } from '../layout/header/header.module';
import { FooterModule } from '../layout/footer/footer.module';
import { AddMemberModule } from './add-member/add-member.module';
import { HomeModule } from '../home/home.module';
import { SidebarModule } from '../layout/sidebar/sidebar.module';
import { ViewMemberModule } from './view-member/view-member.module';
import { EditMemberModule } from './edit-member/edit-member.module';
import { BreadcrumbModule } from '../layout/breadcrumb/breadcrumb.module';




@NgModule({
  imports: [
    CommonModule,
    MembershipRoutingModule,
    MatCardModule,
       MatButtonModule,
       MatMenuModule,
       MatSidenavModule,
       MatIconModule,
       MatDividerModule,
       MatToolbarModule,
       MatListModule,
        FlexLayoutModule,
        HeaderModule,
        FooterModule,
        AddMemberModule,
        HomeModule,
        SidebarModule,
        ViewMemberModule,
        EditMemberModule,
        MatExpansionModule,
        BreadcrumbModule
       
  ],
  declarations: [MembershipComponent   ]
})
export class MembershipModule { }
