import express from 'express'
import { MongoClient } from 'mongodb'
const url = "mongodb+srv://godzela1242006:Medo1242006@learn-mongo-db.zmrfxdx.mongodb.net/?retryWrites=true&w=majority&appName=learn-mongo-db"

const client = new MongoClient(url)

const main = async () => {
    await client.connect()
    console.log("connected successfuly")
    const db = client.db('Medo')
    const collection = db.collection('courses')

    await collection.insertOne({
        name : "course 2",
        price : 3000
    })

    const data = await collection.find().toArray()
    console.log('data' , data)
}
main()