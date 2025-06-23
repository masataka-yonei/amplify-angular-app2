// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
import type { Schema } from "../amplify/data/resource"
import { Amplify } from "aws-amplify"
import { generateClient } from "aws-amplify/api"
import outputs from "../amplify_outputs.json"

Amplify.configure(outputs)

const client = generateClient<Schema>()

client.queries.sayHello({
  name: "Amplify",
})