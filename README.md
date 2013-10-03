# Serviceportalen Design

This project contains everything that is design related for the upcoming version of Serviceportalen.

## HTML Structure

### 1. Panels

A panel is a wrapper element containing various type of information (e.g. tables, forms, information text, etc.)
 
```html
<div class="panel">
	<div class="panel-heading">
		<header>Panel Header</header>
		<div class="btn-group">
			<div type="button" class="btn btn-defaul btn-sm panel-toggle js-panel-add">
				<i class="icon-plus"></i>
				<span>Lägg till</span>
			</div>
			<div type="button" class="btn btn-defaul btn-sm panel-toggle-settings js-panel-settings">
				<i class="icon-cog"></i>
			</div>
			<div type="button" class="btn btn-defaul btn-sm panel-toggle js-panel-toggle">
				<i class="icon-down-open"></i>
			</div>
		</div>
	</div>
</div>
```

## CSS Guidelines & Styles

