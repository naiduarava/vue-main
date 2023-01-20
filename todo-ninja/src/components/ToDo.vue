<template>
    <div>
        <nav>
            <v-toolbar flat app>
                <v-toolbar-title class="text-upper grey--text">
                    <span class="font-weight-dark">TODO-LIST</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn flat color="black">
                    <router-link to ="/" style="text-decoration: none; color: inherit">
                        <span>LogOut</span>
                    </router-link>
                </v-btn>
            </v-toolbar>
        </nav>
        <div>
            <v-card
                color="pink"
                dark
                class="mx-auto mt-2 mb-10"
                max-width="1100px"
            >
                <v-row justify="center">
                <v-dialog
                v-model="dialog"
                persistent
                max-width="600px"
                max-height="500px"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn class="mt-5 mb-5"
                        @click="dialog = true"
                            color="primary"
                            dark
                            v-bind="attrs"
                            v-on="on"
                        >
                            Create
                        </v-btn>
                    </template>
                    <v-card>
                        <v-form
                            ref="form"
                            v-model="valid"
                            lazy-validation
                        >
                            <v-card-title>
                                <span class="text-h5">Create Issue</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col
                                            cols="12"
                                            sm="6"
                                            md="12"
                                        >
                                        <v-text-field
                                            v-model="tasks.task"
                                            id="task-title"
                                            :rules="nameRules"
                                            label="Title*"
                                            required
                                            ></v-text-field 
                                        >
                                        </v-col>
                                        <v-col
                                            cols="12"
                                            sm="6"
                                            md="12"
                                        >
                                            <v-text-field
                                            v-model="tasks.Description"
                                            :rules="DescriptionRules"
                                            label="Description*"
                                            required
                                            ></v-text-field>
                                        </v-col>
                                        <v-col
                                            cols="12"
                                            sm="6"
                                            md="12"
                                        >
                                            <v-text-field
                                            v-model="tasks.AssigneeName"
                                            :rules="AssigneeNameRules"
                                            label="Assignee Name*"
                                            required
                                            ></v-text-field>
                                        </v-col>
                                        <v-col
                                            cols="12"
                                            sm="6"
                                        >
                                            <v-select
                                            v-model="tasks.select"
                                            :items="items"
                                            :rules="selectRules"
                                            label="Tasks*"
                                            required
                                            ></v-select>
                                        </v-col>
                                        <v-col
                                            cols="12"
                                            sm="6"
                                            md="6"
                                        >
                                            <v-text-field
                                            v-model="tasks.DueDate"
                                            :rules="DueDateRules"
                                            label="Due Date*"
                                            required
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field
                                            v-model="tasks.email"
                                            :rules="emailRules"
                                            label="E-mail*"
                                            required
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                                <small>
                                    *indicates required field
                                </small>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <div @click="dialog = false">
                                    <v-btn
                                        color="primary"
                                        text
                                        @click=" closetask"
                                    >
                                        CLOSE
                                    </v-btn>
                                </div>
                                <div >
                                <div @click="dialog = false">
                                    <div @click="created">
                                    <v-btn
                                        color="primary"
                                        text
                                        @click="SubmitTask"
                                        :disabled="!valid"
                                    >
                                        Save
                                    </v-btn>
                                    </div>
                                </div>
                                </div>
                            </v-card-actions>
                        </v-form>
                    </v-card>
                    </v-dialog>
                </v-row>
                <!--edit box-->
                <v-row justify="center">
                    <v-dialog
                    v-model="editbox1"
                    persistent
                    max-width="600px"
                    max-height="500px"
                    >
                        <v-card>
                            <v-form
                                ref="form"
                                v-model="valid"
                                lazy-validation
                            >
                                <v-card-text>
                                    <v-container>
                                        <v-row>
                                            <v-col
                                                cols="12"
                                                sm="6"
                                                md="12"
                                            >
                                                <v-text-field
                                                v-model="tasks.task"
                                                :rules="nameRules"
                                                label="Title*"
                                                required
                                                ></v-text-field>
                                            </v-col>
                                            <v-col
                                                cols="12"
                                                sm="6"
                                                md="12"
                                            >
                                                <v-text-field
                                                v-model="tasks.Description"
                                                :rules="DescriptionRules"
                                                label="Description*"
                                                required
                                                ></v-text-field>
                                            </v-col>
                                            <v-col
                                                cols="12"
                                                sm="6"
                                                md="12"
                                            >
                                                <v-text-field
                                                v-model="tasks.AssigneeName"
                                                :rules="AssigneeNameRules"
                                                label="Assignee Name*"
                                                required
                                                ></v-text-field>
                                            </v-col>
                                            <v-col
                                                cols="12"
                                                sm="6"
                                            >
                                                <v-select
                                                v-model="tasks.select"
                                                :items="items"
                                                :rules="selectRules"
                                                label="Tasks*"
                                                required
                                                ></v-select>
                                            </v-col>
                                            <v-col
                                                cols="12"
                                                sm="6"
                                                md="6"
                                            >
                                                <v-text-field
                                                v-model="tasks.DueDate"
                                                :rules="DueDateRules"
                                                label="Due Date*"
                                                required
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field
                                                v-model="tasks.email"
                                                :rules="emailRules"
                                                label="E-mail*"
                                                required
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-container>
                                    <small>*indicates required field</small>
                                </v-card-text>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <div @click="editbox1 = false">
                                        <v-btn
                                            color="primary"
                                            text
                                            @click=" closetask"
                                        >
                                            CLOSE
                                        </v-btn>
                                        </div>
                                        <div @click="editbox1 = false">
                                        <v-btn
                                        :disabled="!valid"
                                            color="primary"
                                            text
                                            @click="updatedata()"
                                        >
                                            <div>
                                                Save
                                            </div>
                                        </v-btn>
                                        </div>
                                </v-card-actions>
                            </v-form>
                        </v-card>
                    </v-dialog>
                </v-row>
                <!-- Table -->
                <v-card
                class="mx-auto mb-10"
                max-width="900"
                
                >
                    <v-table> 
                        <thead>
                            <tr>
                                <th>Task</th>
                                <th>Status</th>
                                <th>Due Date</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr  
                                v-for="(tasks,index) in getdataObj"
                                :key="index"
                            >
                                <td>
                                    <div @click="edit(tasks)">
                                    <div @click="popup = true">
                                        {{ tasks.data().task}}
                                    </div>
                                    </div>
                                </td>
                                <td>{{ tasks.data().select }}</td>
                                <td>{{ tasks.data().DueDate}}</td>
                                <td>
                                    <div @click="edit(tasks)">
                                        <v-btn
                                            depressed
                                            color="primary"
                                            @click="editbox1 = true" 
                                            >
                                        EDIT
                                        </v-btn>
                                    </div>
                                </td>
                                <td>
                                    <v-btn
                                        depressed
                                        color="primary"
                                        @click="deleteTask(tasks.id)"
                                        >
                                        <div @click="snackbarDel = true">
                                            DELETE
                                        </div>
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card>
                <!--Popup on Task-->
                <v-row justify="center">
                    <v-dialog
                    v-model="popup"
                    persistent
                    max-width="800px"
                    >
                    <v-card>
                        <v-card-title>
                        <span class="text-h5">Task Details</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="12"
                                    >
                                        <v-text-field
                                        v-model="tasks.task"
                                        :rules="nameRules"
                                        label="Title*"
                                        readonly
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="12"
                                    >
                                        <v-text-field
                                        v-model="tasks.Description"
                                        :rules="DescriptionRules"
                                        label="Description*"
                                        readonly
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="12"
                                    >
                                        <v-text-field
                                        v-model="tasks.AssigneeName"
                                        :rules="AssigneeNameRules"
                                        label="Assignee Name*"
                                        readonly
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <v-text-field
                                        v-model="tasks.select"
                                        :items="items"
                                        :rules="selectRules"
                                        label="Tasks*"
                                        readonly
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="6"
                                    >
                                        <v-text-field
                                        v-model="tasks.DueDate"
                                        :rules="DueDateRules"
                                        label="Due Date*"
                                        readonly
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                        v-model="tasks.email"
                                        :rules="emailRules"
                                        label="E-mail*"
                                        readonly
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                    <div @click="popup = false">
                                        <v-btn
                                            color="primary"
                                            text
                                            @click="closetask"
                                        >
                                            CLOSE
                                        </v-btn>
                                    </div>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-row>  
                <!--Sanackbar Update -->
                <v-snackbar
                v-model="snackbarUpda"
                text
                color="pink"
                :timeout="timeout"
                >
                    Successfully Updated
                    <template v-slot:actions>
                        <v-btn
                        color="black"
                        variant="text"
                        @click="snackbarUpda = false"
                        >
                        Close
                        </v-btn>
                    </template>
                </v-snackbar>
                <!--Sanackbar Delete -->
                <v-snackbar
                v-model="snackbarDel"
                text
                color="pink"
                :timeout="timeout"
                >
                    Successfully Deleted
                    <template v-slot:actions>
                        <v-btn
                        color="black"
                        variant="text"
                        @click="snackbarDel = false"
                        >
                            Close
                        </v-btn>
                    </template>
                </v-snackbar>
                <!--Sanackbar Create -->
                <v-snackbar
                v-model="snackbarCre"
                text
                :timeout="timeout"
                color="pink"
                >
                    Successfully Created
                    <template v-slot:actions>
                        <v-btn
                        color="black"
                        variant="text"
                        @click="snackbarCre = false"
                        >
                            Close
                        </v-btn>
                    </template>
                </v-snackbar> 
            </v-card>
        </div>
        <!-- <v-footer>
            <v-col class="text-center mt-4" cols="12">
            <strong>TODO-LIST</strong>
            </v-col>
         </v-footer> -->
    </div>
</template>
<script>
import { db } from '@/fb'
  export default {
    data() {
        return{
        valid: true,
        dialog: false,
        editbox1: false,
        popup: false,

        timeout: 2000,
        snackbarUpda: false,
        snackbarDel: false,
        snackbarCre: false,

        task: '',
        nameRules: [
        v => !!v || 'Title is required',
        v => (v && v.length <= 10) || 'Title must be less than 10 characters',   
        ],
       
        Description: '',
        DescriptionRules: [
        v => !!v || 'Description is required',  
        ],

        AssigneeName: '',
        AssigneeNameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',   
        ],

        DueDate: '',
        DueDateRules: [
        v => !!v || 'DueDate is required',  
        v=>/^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-[0-9]{4}$/.test(v) || 'Date must be valid',
        ],

        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],

        selectRules: [v => !!v || 'Item is required'],
        select: null,
        items: [
            'to-do',
            'progress',
            'completed',
        ],

        editedTask: null,

        tasks: {
            task: null,
            select: null,
            DueDate: null,
            Description: null,
            email: null,
            AssigneeName: null,
        },
        getdataObj: [],
        activeItem:null
    }
    },

    mounted(){
        this.getdata()
      
    },
    methods: {
        SubmitTask() {
            this.$refs.form.validate()
            db.collection('projects').add(this.tasks).then(() =>{
                this.dialog = false;
                this.snackbarCre= true;
            })
        },
        getdata(){
            db.collection('projects').get().then((res)=>{
                console.log(res)
                res.forEach(element => {
                   console.log(element.data()) 
                   this.getdataObj.push(element)
                });
            })
        },
        edit(tasks) {
            this.tasks = tasks.data()
            this.activeItem = tasks.id;
        },

        updatedata(){
            this.$refs.form.validate()
            db.collection("projects").doc(this.activeItem).update(this.tasks).then(() =>{
                this.dialog = false;
                this.snackbarUpda= true;
            })
        },
     
        deleteTask(doc) {
            db.collection("projects").doc(doc).delete().then(() =>{
                this.snackbarDel= true;
            })
        },

        closetask(){
            this.tasks.task = '',
            this.tasks.select = '',
            this.tasks.DueDate = '',
            this.tasks.Description = '',
            this.tasks.email= '',
            this.tasks.AssigneeName = ' '
        }
    },

  }
</script>
