# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140301133430) do

  create_table "auto_responders", force: true do |t|
    t.string   "matcher"
    t.string   "message"
    t.boolean  "enabled"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "auto_responders", ["enabled"], name: "index_auto_responders_on_enabled"

  create_table "tweets", force: true do |t|
    t.string   "key"
    t.string   "account"
    t.string   "message"
    t.string   "message_url"
    t.string   "answer_url"
    t.string   "agent_account"
    t.integer  "chatter_msg_id"
    t.string   "customer_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "tweets", ["key"], name: "index_tweets_on_key", unique: true

end
