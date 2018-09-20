module Main exposing (..)

import Browser
import Html exposing (Attribute, Html, div, h1, img, node, span, text)
import Html.Attributes exposing (attribute, class)
import Html.Events exposing (on, onClick)
import Json.Decode exposing (Decoder, andThen, at, bool, fail, field, succeed)
import List exposing (map)
import String exposing (toLower)


---- MODEL ----


type State
    = Enabled
    | Disabled


type alias User =
    { name : String
    , initials : String
    , state : State
    }


type alias Model =
    { users : List User }


init : () -> ( Model, Cmd Msg )
init _ =
    ( { users =
            [ User "John Doe" "JD" Enabled
            , User "Hannah Light" "HL" Enabled
            , User "Matthew Xo" "MX" Enabled
            , User "ゆき茶" "ゆ茶" Enabled
            ]
      }
    , Cmd.none
    )


switchState : User -> String -> State -> User
switchState user name state =
    if user.name == name then
        { user | state = state }
    else
        user



---- UPDATE ----


type Msg
    = NoOp
    | UserState String State
    | UserUnlocked String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        UserState name state ->
            ( { users = map (\u -> switchState u name state) model.users }, Cmd.none )

        UserUnlocked name ->
            ( { users = map (\u -> switchState u name Enabled) model.users }, Cmd.none )



---- VIEW ----


view : Model -> Html Msg
view model =
    div [ class "users" ] <| map userView model.users


userView : User -> Html Msg
userView user =
    div [ class "user" ]
        [ div
            [ class "user__body" ]
            [ div [ class "name" ] [ text user.name ]
            , node "strawberry-avatar"
                [ attribute "initials" user.initials
                , avatarState user.state
                , onAvatarElapsed (UserUnlocked user.name)
                ]
                []
            ]
        , div
            [ class "user__footer" ]
            [ span [] [ text "Blocked" ]
            , node "strawberry-switcher"
                [ onSwitcherChanged (UserState user.name)
                , switched user.state
                ]
                []
            ]
        ]



---- COMPONENTS ----


avatarState : State -> Attribute msg
avatarState state =
    if state == Disabled then
        attribute "state" "running"
    else
        attribute "state" "default"


onAvatarElapsed : msg -> Attribute msg
onAvatarElapsed msg =
    on "elapsed" (Json.Decode.succeed msg)


switched : State -> Attribute a
switched state =
    if state == Disabled then
        attribute "switched" "true"
    else
        attribute "switched" "false"


targetSwitched : Decoder State
targetSwitched =
    let
        convert : Bool -> Decoder State
        convert value =
            case value of
                True ->
                    succeed Disabled

                False ->
                    succeed Enabled
    in
    at ["target", "switched"] bool |> andThen convert


onSwitcherChanged : (State -> msg) -> Attribute msg
onSwitcherChanged tagger =
    on "changed" (Json.Decode.map tagger targetSwitched)



---- PROGRAM ----


main : Program () Model Msg
main =
    Browser.element
        { init = init
        , update = update
        , view = view
        , subscriptions = always Sub.none
        }
