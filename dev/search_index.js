var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = ChatAPICall","category":"page"},{"location":"#ChatAPICall","page":"Home","title":"ChatAPICall","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for ChatAPICall.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [ChatAPICall]","category":"page"},{"location":"#ChatAPICall.Chat","page":"Home","title":"ChatAPICall.Chat","text":"Chat\n\nChat with OpenAI API.\n\nFields\n\nchatlog::Vector{Dict}: The chat log, default to be Dict[].\napikey::String: The API key, default to be ChatAPICall.apikey.\n\n\n\n\n\n","category":"type"},{"location":"#ChatAPICall.Chat-Tuple{AbstractString, AbstractString}","page":"Home","title":"ChatAPICall.Chat","text":"Chat(msg)\n\nInitialize Chat object by a message.\n\nBy default, the apikey is set to be ChatAPICall.apikey.\n\n\n\n\n\n","category":"method"},{"location":"#ChatAPICall.ErrResp","page":"Home","title":"ChatAPICall.ErrResp","text":"ErrResp\n\nError response from OpenAI API.\n\nFields\n\nmessage::String: The error message.\ntype::String: The error type.\nparam::Union{Nothing, String}: The parameter that caused the error.\ncode::String: The error code.\n\n\n\n\n\n","category":"type"},{"location":"#ChatAPICall.Resp","page":"Home","title":"ChatAPICall.Resp","text":"Resp\n\nResponse from OpenAI API.\n\nFields\n\ntotal_tokens::Int: Total number of tokens in the response.\nprompt_tokens::Int: Number of tokens in the prompt.\ncompletion_tokens::Int: Number of tokens in the completion.\ncontent::String: The completion.\nid::String: The ID of the completion.\nmodel::String: The model used to generate the completion.\n\n\n\n\n\n","category":"type"},{"location":"#Base.copy-Tuple{Chat}","page":"Home","title":"Base.copy","text":"copy(chat::Chat)\n\nCopy a chat log.\n\n\n\n\n\n","category":"method"},{"location":"#Base.length-Tuple{Chat}","page":"Home","title":"Base.length","text":"length(chat::Chat)\n\nGet the number of messages in the chat log.\n\n\n\n\n\n","category":"method"},{"location":"#Base.pop!-Tuple{Chat}","page":"Home","title":"Base.pop!","text":"pop!(chat::Chat)\n\nPop the last message from the chat log.\n\n\n\n\n\n","category":"method"},{"location":"#Base.print-Tuple{IO, Chat, AbstractString}","page":"Home","title":"Base.print","text":"print(io::IO, chat::Chat)\n\nPrint the chat log.\n\n\n\n\n\n","category":"method"},{"location":"#Base.print-Tuple{IO, Chat}","page":"Home","title":"Base.print","text":"print(io::IO, chat::Chat)\n\nPrint the chat log.\n\n\n\n\n\n","category":"method"},{"location":"#Base.show-Tuple{IO, Chat}","page":"Home","title":"Base.show","text":"show(io::IO, chat::Chat)\n\nShow information of the chat log.\n\n\n\n\n\n","category":"method"},{"location":"#ChatAPICall.add!-Tuple{Chat, AbstractString, AbstractString}","page":"Home","title":"ChatAPICall.add!","text":"add!(chat::Chat, role::AbstractString, content::AbstractString)\n\nAdd a message to the chat log.\n\n\n\n\n\n","category":"method"},{"location":"#ChatAPICall.add!-Tuple{Chat, Resp}","page":"Home","title":"ChatAPICall.add!","text":"add!(chat::Chat, resp::Resp)\n\nAdd a response from OpenAI API to the chat log.\n\nArguments\n\nchat::Chat: The chat log.\nresp::Resp: The response from OpenAI API.\n\n\n\n\n\n","category":"method"},{"location":"#ChatAPICall.addassistant!-Tuple{Chat, AbstractString}","page":"Home","title":"ChatAPICall.addassistant!","text":"addassistant!(chat::Chat, content::AbstractString)\n\nAdd an assistant message to the chat log.\n\n\n\n\n\n","category":"method"},{"location":"#ChatAPICall.addsystem!-Tuple{Chat, AbstractString}","page":"Home","title":"ChatAPICall.addsystem!","text":"addsystem!(chat::Chat, content::AbstractString)\n\nAdd a system message to the chat log.\n\n\n\n\n\n","category":"method"},{"location":"#ChatAPICall.adduser!-Tuple{Chat, AbstractString}","page":"Home","title":"ChatAPICall.adduser!","text":"adduser!(chat::Chat, content::AbstractString)\n\nAdd a user message to the chat log.\n\n\n\n\n\n","category":"method"},{"location":"#ChatAPICall.defaultprompt-Tuple{Any}","page":"Home","title":"ChatAPICall.defaultprompt","text":"defaultprompt(msg)\n\nDefault prompt for Chat(msg:AbstractString).\n\n\n\n\n\n","category":"method"},{"location":"#ChatAPICall.getresponse!-Tuple{Chat}","page":"Home","title":"ChatAPICall.getresponse!","text":"getresponse!( chat::Chat\n            , maxrequests::Int=1\n            , compact::Bool=true\n            , model::AbstractString=\"gpt-3.5-turbo\"\n            , options...)::Resp\n\nGet a response from OpenAI API and add it to the chat log.\n\n\n\n\n\n","category":"method"},{"location":"#ChatAPICall.getresponse-Tuple{Chat}","page":"Home","title":"ChatAPICall.getresponse","text":"getresponse( chat::Chat\n           , maxrequests::Int=1\n           , compact::Bool=true\n           , model::AbstractString=\"gpt-3.5-turbo\"\n           , options...)::Resp\n\nGet a response from OpenAI API.\n\nArguments\n\nchat::Chat: The chat log.\nmaxrequests::Int: The maximum number of requests to OpenAI API.\ncompact::Bool: Whether to compact the response.\nmodel::AbstractString: The model to use.\n**options: Other options to pass to ChatAPICall.request.\n\n\n\n\n\n","category":"method"},{"location":"#ChatAPICall.proxy_off-Tuple{}","page":"Home","title":"ChatAPICall.proxy_off","text":"proxy_off()\n\nTurn off proxy.\n\n\n\n\n\n","category":"method"},{"location":"#ChatAPICall.proxy_on-Tuple{Union{Nothing, AbstractString}, Union{Nothing, AbstractString}}","page":"Home","title":"ChatAPICall.proxy_on","text":"proxy_on(http::Union{Nothing, AbstractString}, https::Union{Nothing, AbstractString})\n\nTurn on proxy.\n\n\n\n\n\n","category":"method"},{"location":"#ChatAPICall.proxy_status-Tuple{}","page":"Home","title":"ChatAPICall.proxy_status","text":"proxy_status()\n\nGet proxy status.\n\n\n\n\n\n","category":"method"},{"location":"#ChatAPICall.setapikey-Tuple{AbstractString}","page":"Home","title":"ChatAPICall.setapikey","text":"setapikey(key::AbstractString)\n\nSet the OpenAI API key.\n\n\n\n\n\n","category":"method"},{"location":"#ChatAPICall.setbaseurl-Tuple{AbstractString}","page":"Home","title":"ChatAPICall.setbaseurl","text":"setbaseurl(url::AbstractString)\n\nSet the proxy URL of the OpenAI API.\n\n\n\n\n\n","category":"method"},{"location":"#ChatAPICall.showapikey-Tuple{}","page":"Home","title":"ChatAPICall.showapikey","text":"showapikey()\n\nShow the OpenAI API key.\n\n\n\n\n\n","category":"method"}]
}
