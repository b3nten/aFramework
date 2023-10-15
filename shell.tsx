const import_map = await Deno.readTextFile("./import_map.json")
export default function Shell({children}: {children: any}) {
	return (
		<html>
			<head>
				<title>Shell</title>
				<link rel="stylesheet" href="/index.css" />
				<link rel="stylesheet" href="/uno.css" />
				<script type="importmap" dangerouslySetInnerHTML={{__html: import_map}}/>
			</head>
			<body>
				<div id="app">{children}</div>
				<script type="module" src="/client/app.tsx"></script>
			</body>
		</html>
	)
}