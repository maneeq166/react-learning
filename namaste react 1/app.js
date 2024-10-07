// const heading=  React.createElement('h1',{ id : "heading", xyz : "abc"}," hello " )
/*
React.createElement (object) which gets converted into  => HTMl ( which Browser understands)
*/





            const root= ReactDOM.createRoot(document.getElementById('root'))
            const div1 = React.createElement(
                'div', 
                {id : 'parent'},
                React.createElement(
                    'div',
                    {id : 'children'},
                    [React.createElement( 'h1', {} , "hello " ),
                    React.createElement( 'h2', { } , "hello " ),]
                )
            )

            root.render(div1) 