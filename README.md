# notes-api
Sebuah Project Api Pembuatan Notes Menggunakan NodeJs dan Framework Hapi


# API Spec
# Post(Adding Notes)
Adding Notes : localhost:5000/notes <br><br>
Request : {
   "title": "Catatan A",
   "tags": ["Android", "Web"],
   "body": "Isi dari catatan A"
} 

# GET(Getting All Notes)
Getting All Notes : localhost:5000/notes

# GET(Getting Specified Note)
Getting Specified Note : localhost:5000/notes/{{noteId}}
<br><br>

# PUT(Update Note)
Update Note : localhost:5000/notes/{{noteId}}
<br><br>
Request : {
    "title": "Catatan A Revised",
    "tags": ["Android", "Web"],
    "body": "Isi dari Catatan A Revised"
}

# DELETE(Delete Notes)
Delete Notes : localhost:5000/notes/{{noteId}}


#
