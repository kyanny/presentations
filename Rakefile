require 'bundler/setup'
require 'chronic'
require 'erb'
require 'redcarpet'
require 'json'

task :default do
  markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML, autolink: true, tables: true)
  @html = markdown.render(File.read('README.md'))
  File.write('index.html', ERB.new(File.read('index.html.erb')).result)

  @data = []
  dates = []
  File.readlines('README.md').each do |line|
    line.chomp!
    next unless line.match(/,\s*\d\d\d\d/)
    line.sub!(/^-\s*/, '')
    d = Chronic.parse(line)
    dates << d
  end
  dates.sort!
  @years = dates.map(&:year).uniq.sort
  @years.each.with_index do |y, i|
    1.upto(12) do |n|
      cnt = 0
      dates.each do |d|
        if d.year == y && d.month == n
          cnt += 1
        end
      end
      @data << [i, n-1, cnt]
    end
  end
  File.write('punchcard.js', ERB.new(File.read('punchcard.js.erb')).result)
end
