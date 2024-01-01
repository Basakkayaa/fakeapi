import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { PostComponent } from '../companent/post/post.component';
import { UserComponent } from '../companent/user/user.component';
import { CartComponent } from '../companent/cart/cart.component';
import { ProductComponent } from '../companent/product/product.component';
import { QuoteComponent } from '../companent/quote/quote.component';
import { TodoComponent } from '../companent/todo/todo.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "page1", component: Page1Component },
    { path: "page2", component: Page2Component },
    { path: "post", component: PostComponent },
    { path: "users", component: UserComponent },
    { path: "carts", component: CartComponent },
    { path: "products", component: ProductComponent },
    { path: "quotes", component: QuoteComponent },
    { path: "todos", component: TodoComponent }
];
