desc "Builds the website from source"
task :build do |t,args|
  puts "## Building website"
  status = system("middleman build --clean")
  puts status ? "OK" : "FAILED"
end

desc "deploy build directory to github pages"
task :deploy do
  puts "## Deploying branch to Github Pages "
  cd "gh-pages" do
    system "git a -A"
    message = "Site updated at #{Time.now.utc}"
    puts "\n## Commiting: #{message}"
    system "git commit -m \"#{message}\""
    puts "\n## Pushing generated website"
    system "git push origin gh-pages"
    puts "\n## Github Pages deploy complete"
  end
end
